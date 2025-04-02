import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  canvas {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${props => props.theme.colors.textPrimary};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    position: relative;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ::selection {
    background-color: ${props => props.theme.colors.accent}33;
    color: ${props => props.theme.colors.textPrimary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.backgroundDarker};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.backgroundLight};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accent};
  }

  .section {
    padding: 100px 0;
    position: relative;
    background-color: transparent;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    overflow: hidden;
    width: 100%;
  }

  .section-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0;
    padding: 0;
    border: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes buttonHover {
    to {
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
      transform: translateY(-5px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease forwards;
  }

  .fade-in-left {
    animation: fadeInLeft 0.8s ease forwards;
  }

  .fade-in-right {
    animation: fadeInRight 0.8s ease forwards;
  }

  .float {
    animation: float 5s ease-in-out infinite;
  }

  .rotate {
    animation: rotate 10s linear infinite;
  }

  .pulse {
    animation: pulse 2.5s ease infinite;
  }

  .gradient-text {
    background: ${props => props.theme.colors.gradient};
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientFlow 3s ease infinite;
    display: inline-block;
  }

  .shimmer {
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0) 0%, 
      ${props => props.theme.colors.accent}15 50%, 
      rgba(255, 255, 255, 0) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }

  .reveal-text {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.colors.background};
      animation: revealText 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      transform-origin: right;
    }
    
    @keyframes revealText {
      from {
        transform: scaleX(1);
      }
      to {
        transform: scaleX(0);
      }
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes borderFadeIn {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 60px;
      opacity: 1;
    }
  }
  
  /* Animation classes for intersection observer */
  .hidden {
    opacity: 0;
    transform: translateY(50px);
  }
  
  .show {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease;
  }
  
  .show-slow {
    transition-delay: 0.3s;
  }
  
  .show-slower {
    transition-delay: 0.6s;
  }
`;

export default GlobalStyle; 