import React, { useRef, useState } from "react";
import styled from "styled-components";
import SectionDivider from "../SectionDivider";
import { FiExternalLink } from "react-icons/fi";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  max-width: 100vw;
`;

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 80px 50px 0;
  width: 100%;
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 80px 30px 0;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 80px 20px 0;
  }
`;

const Greeting = styled.h1`
  color: ${props => props.theme.colors.hero.accent};
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in-out;
  position: relative;
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

const Name = styled.h2`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  
  .highlight {
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      bottom: 0.1em;
      left: 0;
      background-color: ${props => props.theme.colors.hero.accent};
      opacity: 0.3;
      z-index: -1;
    }
  }
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 3.4rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 3.8rem;
  font-weight: 700;
  margin: 10px 0 20px;
  line-height: 1.1;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 3.2rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 20px 0 30px;
  line-height: 1.6;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 15px;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme.colors.hero.accent};
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: 2px solid ${props => props.theme.colors.hero.accent};
  border-radius: 4px;
  margin-right: 15px;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    background-color: rgba(58, 134, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(58, 134, 255, 0.2);
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${props => props.theme.colors.hero.gradient};
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 134, 255, 0.3);
    filter: brightness(1.05);
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const ScrollPrompt = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 1.5s ease-in-out infinite alternate;
  cursor: pointer;
  
  span {
    color: ${props => props.theme.colors.hero.accent};
    margin-bottom: 10px;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  &::after {
    content: "";
    width: 2px;
    height: 40px;
    background-color: ${props => props.theme.colors.hero.accent};
    animation: scrollDown 1.5s ease-in-out infinite;
  }
  
  @keyframes scrollDown {
    0% {
      height: 0;
      opacity: 0;
    }
    50% {
      height: 40px;
      opacity: 1;
    }
    100% {
      height: 0;
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;

const CodeBrackets = styled.div`
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.code};
  color: #1a1a1a;
  animation: float 6s ease-in-out infinite;
  user-select: none;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    color: #000000;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    animation-play-state: paused;
  }
  
  @keyframes float {
    0% {
      transform: translateY(-50%) translateX(0) rotate(0deg) scale(1);
    }
    25% {
      transform: translateY(-53%) translateX(-5px) rotate(-1deg) scale(1.03);
    }
    50% {
      transform: translateY(-50%) translateX(-8px) rotate(0deg) scale(1);
    }
    75% {
      transform: translateY(-47%) translateX(-5px) rotate(1deg) scale(0.97);
    }
    100% {
      transform: translateY(-50%) translateX(0) rotate(0deg) scale(1);
    }
  }
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 4rem;
    right: 5%;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3rem;
    right: 10%;
    opacity: 0.5;
  }
  
  @media (max-width: 480px) {
    display: none; /* Hide completely on very small screens */
  }
`;

const HeroSocialIcons = styled.div`
  // Add appropriate styles for HeroSocialIcons
`;

const HeroButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  animation: fadeInUp 1s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  
  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 15px;
  }
`;

const GetInTouch = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${props => props.theme.colors.hero.gradient};
  color: white;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  svg {
    margin-left: 8px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 134, 255, 0.3);
    filter: brightness(1.05);
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const Hero = () => {
  const heroRef = useRef(null);
  const codeBracketsRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCodeBracketsClick = () => {
    setIsClicked(true);

    // Add a quick animation effect
    if (codeBracketsRef.current) {
      codeBracketsRef.current.style.transform = 'translateY(-50%) scale(1.2)';
      codeBracketsRef.current.style.color = '#000000';

      setTimeout(() => {
        if (codeBracketsRef.current) {
          codeBracketsRef.current.style.transform = 'translateY(-50%) scale(1)';
          setIsClicked(false);
        }
      }, 300);
    }
  };

  // Handle direct navigation to contact section
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <HeroSection id="hero" ref={heroRef}>
        <HeroContainer>
          <Greeting>Hello, I'm</Greeting>
          <Name>
            <span className="highlight">Python Developer</span>
          </Name>
          <Title>& Data Analyst</Title>
          <Description>
            Turning complex data into actionable insights and developing intelligent applications that make an impact. Passionate about creating seamless automation systems that transform how businesses operate.
          </Description>

          <ButtonContainer>
            <ResumeButton href="#projects">View My Work</ResumeButton>
            <ContactButton href="#contact" className="contact-cta-button" onClick={handleContactClick}>Get In Touch</ContactButton>
          </ButtonContainer>
        </HeroContainer>
        <CodeBrackets
          ref={codeBracketsRef}
          onClick={handleCodeBracketsClick}
          style={{ animationPlayState: isClicked ? 'paused' : 'running' }}
        >
          &lt;/&gt;
        </CodeBrackets>
        <ScrollPrompt onClick={scrollToNextSection}>
          <span>Scroll</span>
        </ScrollPrompt>
      </HeroSection>
      <SectionDivider section="hero" />
    </>
  );
};

export default Hero; 