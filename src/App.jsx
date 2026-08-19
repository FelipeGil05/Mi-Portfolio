import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollTopButton from "./components/ScrollTopButton";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  return (
    <LanguageProvider>
      <AnimatedBackground />
      <CursorTrail />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </LanguageProvider>
  );
}
