import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import SocialIcons from './components/SocialIcons';
import Email from './components/Email';
import Hero from './components/Hero';
import About from './components/About';
import MyProjects from './components/MyProjects';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const themeToggler = () => {
    // theme === 'light' ? setTheme('dark') : setTheme('light')
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    localStorage.getItem('theme') ? setTheme(theme) : localStorage.setItem('theme', 'dark');
  }, [])
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar themeToggler={themeToggler} />
        <SocialIcons />
        <Email />
        <div className="container">
          <section id='hero'>
            <Hero />
          </section>
          <section>
            <div className='custom-anchor' id='about'>.</div>
            <h1><span className='monospace'>01.</span>About Me</h1>
            <About />
          </section>
          <section >
            <div className='custom-anchor' id='experience'>.</div>
            <h1><span className='monospace'>02.</span>My Projects</h1>
            <MyProjects />
          </section>
          <section >
            <div className='custom-anchor' id='work'>.</div>
            <h1><span className='monospace'>03.</span>Where I've Worked</h1>
            <MyWork />
          </section>
          <section id='contact-section'>
            <div className='custom-anchor' id='contact'>.</div>
            <h1><span className='monospace'>04. Now What?</span><br></br></h1>
            <Contact />
          </section>
          <footer>
            <span className='monospace'>Designed & Built by Alon Zuman</span>
          </footer>
          <br></br>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
