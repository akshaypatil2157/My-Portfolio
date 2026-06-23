import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import "./App.css";
import Education from "./Education";
import Certifications from "./Certifications";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <>
        <div className="ai-bg"></div>
        <div className="glow glow1"></div>
        <div className="glow glow2"></div> 
             

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Education />

        <Skills />
        
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;