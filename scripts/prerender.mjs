// scripts/prerender.mjs
// Post-build step: renders the built app in a headless browser and writes
// the resulting DOM back into dist/index.html, so the server response
// already contains the painted page (no JS execution needed for first paint).
// main.jsx hydrates over this markup instead of re-rendering it from scratch.
//
// Locally (or any non-Vercel machine) this uses the full "puppeteer" package,
// which bundles a matching Chromium for whatever OS it's installed on. On
// Vercel's build servers the OS image is missing the shared libraries a
// normal Chromium needs (libnspr4, etc.) and there's no way to apt-get them,
// so there we use @sparticuz/chromium instead: a Chromium build compiled
// specifically to run in minimal serverless/CI Linux containers.

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-gpu"],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });
}

const distDir = path.resolve("dist");
const port = 4321;

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
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

async function main() {
  const server = await startServer();
  console.log(`Prerender server listening on http://localhost:${port}`);

  const browser = await launchBrowser();

  let html;
  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/?prerender=1`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    // Deja asentar un frame extra para que efectos de montaje terminen.
    await new Promise((r) => setTimeout(r, 300));
    html = await page.content();
  } finally {
    await browser.close();
    server.close();
  }

  html = html.trim();
  if (!html.toLowerCase().startsWith("<!doctype") && !html.startsWith("<html")) {
    throw new Error("Unexpected page content, aborting prerender to avoid corrupting index.html");
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
