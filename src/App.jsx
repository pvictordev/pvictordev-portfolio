import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Skills from './components/skills/Skills'
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
// import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  //theme color
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);

  const themeToggle = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div className="app">
      <Header theme={theme} themeToggle={themeToggle} />
      <main className="main">
        <Home theme={theme} />
        <About theme={theme} />
        {/* <Skills/> */}
        <Services theme={theme} />
        <Qualification />
        <Work />
        {/* <Testimonials/> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
