import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s ease-in-out;
    font-family:  Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  }
  
  .project-description, .navbar {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s ease-in-out;
  }
  
  p {
    color: ${({ theme }) => theme.paragraph};
    font-weight: 600;
  }

  .primary-button {
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
  
  .primary-button:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transition: all 0.5s ease-in-out;
  }
  
  h3 {
    color: ${({ theme }) => theme.primary};
  }
  
  .fas, .fab, .fa {
    color: ${({ theme }) => theme.text};
  }
  
  .fas:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  .fab:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  .slider {
    background-color: ${({ theme }) => theme.body};
    box-shadow: 0px 0px 2px black;
  }
  
  .slider:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.primary};
  }
  
  .slider:focus {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.primary};
  }
  
  .background {
    background-color: ${({ theme }) => theme.primary};
  }
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
  
  .nav-item:hover {
    color: ${({ theme }) => theme.primary};
  }

  .email-address {
    color: ${({ theme }) => theme.text}!important;
    font-size: 1.4rem;
  }
  
  .email-address:hover {
    color: ${({ theme }) => theme.primary}!important;
  }
  
  .monospace {
    color: ${({ theme }) => theme.primary};
  }
  
  .about-photo {
    opacity: 0.8;
  }

  .about-photo:hover {
    object-fit: cover;
    opacity: 1;
  }

  .about-photo-background {
    background-color: #a24d69;
    width: 300px;
    height: 300px;
  }

  .fa-moon:hover {
    color: ${({ theme }) => theme.text};
  }
  
  .fa-sun:hover {
    color: ${({ theme }) => theme.text};
  }

  .mobile-menu-container {
    background-color: ${({ theme }) => theme.body};
  }
  
  .mobile-navbar {
    background-color: ${({ theme }) => theme.body};
    transition: all 0.5s ease-in-out
  }
  
  .work-tab {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s ease-in-out;
    border: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
  
  .selected-tab {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.selected};
    color: ${({ theme }) => theme.primary};
  }
  ` 