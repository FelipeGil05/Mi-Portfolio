// scripts/prerender.mjs
// Post-build step: renders the built app in a headless browser and writes
// the resulting DOM back into dist/index.html, so the server response
// already contains the painted page (no JS execution needed for first paint).
// main.jsx hydrates over this markup instead of re-rendering it from scratch.

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const distDir = path.resolve("dist");
const port = 4321;

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".json": "application/json",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function startServer() {
  const server = createServer(async (req, res) => {
    let filePath = path.join(distDir, decodeURIComponent(req.url.split("?")[0]));
    if (req.url === "/" || !existsSync(filePath) || filePath.endsWith(path.sep)) {
      filePath = path.join(distDir, "index.html");
    }
    try {
      const data = await readFile(filePath);
      const ext = path.extname(filePath);
      res.writeHead(200, { "Content-Type": mime[ext] || "application/octet-stream" });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

function findEdge() {
  const candidates = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  throw new Error("Edge not found");
}

async function main() {
  const server = await startServer();
  console.log(`Prerender server listening on http://localhost:${port}`);

  const edge = findEdge();
  const profileDir = path.join(process.env.TEMP || "/tmp", "prerender_profile");

  const { stdout } = await execFileAsync(edge, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--user-data-dir=${profileDir}`,
    "--dump-dom",
    "--virtual-time-budget=4000",
    `http://localhost:${port}/?prerender=1`,
  ], { maxBuffer: 20 * 1024 * 1024 });

  server.close();

  let html = stdout.trim();
  if (!html.startsWith("<!DOCTYPE") && !html.startsWith("<html")) {
    throw new Error("Unexpected dump-dom output, aborting prerender to avoid corrupting index.html");
  }
  if (!html.toLowerCase().startsWith("<!doctype")) {
    html = "<!doctype html>\n" + html;
  }
  if (!/<h1[^>]*>Felipe Gil<\/h1>/.test(html)) {
    throw new Error("Prerendered output missing expected hero content, aborting to avoid a broken index.html");
  }

  await writeFile(path.join(distDir, "index.html"), html, "utf-8");
  console.log("Prerendered dist/index.html (" + html.length + " bytes)");
}

main().catch((err) => {
  console.error("Prerender failed:", err.message);
  process.exit(1);
});
