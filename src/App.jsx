import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollTopButton from "./components/ScrollTopButton";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </>
  );
}
