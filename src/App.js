import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import useWindowDimensions from './useWindowDimensionsHook';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WorkAndProjects from './pages/WorkAndProjects';
import Login from './pages/Login';


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchedTheme = localStorage.getItem('theme');
    if (!fetchedTheme) return localStorage.setItem('theme', 'dark');
  }, [])

  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router>
          {width > 760 && <Navbar theme={theme} themeToggler={themeToggler} />}
          {width < 760 && <MobileNavbar theme={theme} themeToggler={themeToggler} />}
          <Switch>
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/admin'>
              </Route>
              <Route path='/admin' component={Admin} />
              <Route path='/login' component={Login} />
            </div>
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
