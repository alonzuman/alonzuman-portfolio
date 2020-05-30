import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background 0.5s ease-in-out;
  }
  
  .navbar {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s ease-in-out;
  }
  
  .mobile-navbar {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s ease-in-out;
  }
  
  .mobile-navbar a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: all 0.50s ease-in-out;
  }
  
  .nav-item:hover {
    border-bottom: 2px solid  ${({ theme }) => theme.text};
    cursor: pointer;
    transition: border-bottom 0.3sec ease-in-out;
  }
  
  .navlink-active {
    border-bottom: 2px solid  ${({ theme }) => theme.text};
    cursor: pointer;
    transition: border-bottom 0.3sec ease-in-out;
  }
  
  .mobile-menu {
    background-color: ${({ theme }) => theme.body};
  }
  
  .mobile-menu a {
    color: ${({ theme }) => theme.text};
  }
  
  .mobile-menu button {
    color: ${({ theme }) => theme.text};
  }
  
  .navbar a {
    color: ${({ theme }) => theme.text};
  }
  
  .project-card {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
  .close-button {
    border: none;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
    position: absolute;
    left: 2rem;
    top: 2rem;
    transition: text-shadow 0.5s ease-in-out;
  }

  #card-close-button {
    text-shadow: 0px 1px 5px black;
  }
  
  #card-close-button:hover {
    text-shadow: 0px 1px 10px black;
  }

  .close-button:hover {
    transition: text-shadow 0.5s ease-in-out;
  }

  .close-button:focus {
    outline: none;
  }

  .repository-link {
    color: ${({ theme }) => theme.text};
    font-size: 2rem!important;
    margin: 0 0 1rem 0;
    margin-left: 0.5rem;
  }

  input {
    border-bottom: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
  }
  `
