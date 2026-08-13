import { Navbar } from "./components/Navbar";
import { ScanLine } from "./components/ScanLine";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CybersecurityMindset } from "./components/CybersecurityMindset";
import { Journey } from "./components/Journey";
import { OpenSource } from "./components/OpenSource";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#0a0b0d]"
      >
        Skip to content
      </a>

      <Navbar />
      <ScanLine />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CybersecurityMindset />
        <Journey />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
