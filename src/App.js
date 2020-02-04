import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import DummyText from "./dummyText";
import Section from "./components/Section";
import Particles from "react-particles-js";
import particlesjsconfig from "./particlesjs-config.json";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos - currentScrollPos > 3) {
      document.getElementById("navbar").style.top = "0";
    } else if (currentScrollPos - prevScrollPos > 17) {
      document.getElementById("navbar").style.top = "-110px";
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <div className="App">
      <Navbar />
      <Particles className="particles" params={particlesjsconfig} />
      <Intro />
      <About />
      <Experience />
      <Section
        title="03. Projects"
        subtitle={DummyText}
        dark={true}
        id="projects"
      />
      <Section
        title="04. Contact"
        subtitle={DummyText}
        dark={true}
        id="contact"
      />
      <Footer />
    </div>
  );
}

export default App;
