import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
// import Services from "./components/services/Services";
// import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
// import Testimonials from './components/testimonials/Testimonials'
// import Skills from './components/skills/Skills'

function App() {

  //system default theme
  const [theme, setTheme] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setTheme(e.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  //switch theme
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
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
        {/* <Services theme={theme} /> */}
        {/* <Qualification theme={theme} /> */}
        <Work theme={theme} />
        {/* <Testimonials/> */}
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
      <ScrollUp />
    </div>
  );
}

export default App;
