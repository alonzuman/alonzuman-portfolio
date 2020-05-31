import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s ease-in-out;
  }
  
  .project-description, .navbar {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s ease-in-out;
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
  ` 