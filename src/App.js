import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
// import HonorableMentions from './components/HonorableMentions';
import MobileNavbar from './components/MobileNavbar';
import useWindowDimensions from './components/useWindowDimensions';
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
  const { width } = useWindowDimensions();

  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    theme ? setTheme(theme) : localStorage.setItem('theme', 'dark');
  }, []);


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        {width > 760 ? <Navbar themeToggler={themeToggler} /> : <MobileNavbar themeToggler={themeToggler} />}
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
          {/* <section>
            <div className='custom-anchor' id='honorable-mentions'>.</div>
            <h1><span className='monospace'>04.</span>Honorable Mentions</h1>
            <HonorableMentions />
          </section> */}
          <section id='contact-section'>
            <div className='custom-anchor' id='contact'>.</div>
            <h1><span className='monospace'>04. Now What?</span><br></br></h1>
            <Contact />
          </section>
          <footer>
            <ul className='social-icons-mobile'>
              <li className='social-icon'>
                <a href='https://github.com/alonzuman' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className='social-icon'>
                <a href='https://facebook.com/alonzuman' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className='social-icon'>
                <a href='https://www.linkedin.com/in/alon-zuman-018365193/' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li className='social-icon'>
                <a href='https://instagram.com/alonzuman' rel="noopener noreferrer" target='_blank'>
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <a className='bottom-email' href='mailto:alonzuman7@gmail.com'><div className='monospace'>alonzuman7@gmail.com</div></a>
            <span className='monospace'>Designed & Built by Alon Zuman</span>
          </footer>
          <br></br>
        </div>
      </>
    </ThemeProvider >
  );
}

export default App;
