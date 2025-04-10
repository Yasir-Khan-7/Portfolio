import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionDivider from '../SectionDivider';

const AboutContainer = styled.section`
  padding: 100px 10% 150px;
  position: relative;
  background: ${props => props.theme.colors.background};
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  
  @media screen and (max-width: 768px) {
    padding: 80px 5% 100px;
  }
`;

const AboutContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  margin-top: 30px;
  width: 100%;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-top: 0;
  }
`;

const AboutTextContent = styled.div`
  flex: 1;
  z-index: 2;
  max-width: 100%;
`;

const AboutHeading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: ${props => props.theme.colors.about.accent};
    bottom: -12px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`;

const AboutContent = styled.div`
  background-color: ${props => props.theme.colors.about.highlight};
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin: 0 0 20px;
  color: ${props => props.theme.colors.textSecondary};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: ${props => props.theme.colors.about.accent};
    font-weight: 600;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0;
  max-width: 400px;
  margin-right: 20px;
  transform: translateY(0);
  
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 300px;
    align-self: center;
    margin-right: 0;
    margin-top: 0;
    transform: none;
  }
  
  @media screen and (max-width: 480px) {
    max-width: 250px;
  }
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background: url('${process.env.PUBLIC_URL}/images/profile/profile_pic.jpeg') no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 320px;
  }
  
  @media screen and (max-width: 480px) {
    width: 220px;
    height: 280px;
  }
`;

const SkillsHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px 50px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
`;

const SkillItem = styled.li`
  position: relative;
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 10px;
  padding-left: 20px;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.about.accent};
  }
`;

const AIToolsSection = styled.div`
  margin-top: 70px;
  width: 100%;
`;

const AIToolsHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.colors.about.accent};
    bottom: -10px;
    left: 0;
  }
`;

const AIToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  margin-top: 30px;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AIToolCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border-color: ${props => props.theme.colors.about.accent + '30'};
  }
`;

const AIToolLogo = styled.img`
  height: 70px;
  width: 70px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const AIToolName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 12px;
`;

const AIToolDescription = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

const DecorativeSphere = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.theme.colors.about.highlight} 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
`;

const About = () => {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
          el.classList.add('show');
        });

        if (headingRef.current) {
          headingRef.current.style.animationPlayState = 'running';
        }
      }
    }, {
      threshold: 0.1
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <>
      <AboutContainer id="about" ref={aboutRef}>
        <DecorativeSphere
          initial={{ x: '-50vw', y: '20vh' }}
          animate={{ x: '-40vw', y: '20vh' }}
          transition={{ repeat: Infinity, duration: 15, repeatType: 'reverse' }}
        />

        <AboutHeading ref={headingRef}>About Me</AboutHeading>

        <AboutContentWrapper>
          <AboutTextContent>
            <AboutText className="animate-on-scroll hidden">
              Hi there! I'm a passionate final year software engineering student with a focus on creating exceptional digital experiences and innovative solutions. I enjoy building elegant, data-driven applications and intelligent systems using modern technologies.
            </AboutText>

            <AboutText className="animate-on-scroll hidden">
              My journey in software development started with a curiosity about how technology can solve real-world problems. This curiosity evolved into a passion for creating impactful solutions across various domains including <strong>industrial automation</strong>, <strong>data analysis</strong>, and <strong>artificial intelligence</strong>.
            </AboutText>

            <AboutText className="animate-on-scroll hidden">
              My current focus is on developing AI-powered applications, creating intuitive data visualizations, and building data-driven systems. I am actively seeking opportunities in the fields of <strong>artificial intelligence</strong>, <strong>Python development</strong>, and <strong>data analytics</strong> where I can leverage my technical skills to create innovative solutions that drive meaningful impact.
            </AboutText>

            <SkillsHeading className="animate-on-scroll hidden">My core competencies include:</SkillsHeading>
            <SkillsList className="animate-on-scroll hidden">
              <SkillItem>AI-Driven Software Development</SkillItem>
              <SkillItem>Natural Language Processing</SkillItem>
              <SkillItem>Business Intelligence & Analytics</SkillItem>
              <SkillItem>Database Management</SkillItem>
              <SkillItem>Industrial Automation</SkillItem>
              <SkillItem>Data Pipeline Engineering</SkillItem>
              <SkillItem>Frontend Web Solutions</SkillItem>
              <SkillItem>Data Visualization</SkillItem>
            </SkillsList>
          </AboutTextContent>

          <ImageContainer className="animate-on-scroll hidden">
            <ProfileImage />
          </ImageContainer>
        </AboutContentWrapper>

        <AIToolsSection className="animate-on-scroll hidden">
          <AIToolsHeading>AI Tools Proficiency</AIToolsHeading>
          <AboutText>
            I leverage cutting-edge AI tools to enhance productivity and deliver exceptional results. My expertise with these technologies enables me to develop solutions efficiently and stay at the forefront of AI-powered development.
          </AboutText>
          <AIToolsGrid>
            <AIToolCard className="animate-on-scroll hidden">
              <AIToolLogo src={`${process.env.PUBLIC_URL}/images/ai_tools/github_copilot_logo.png`} alt="GitHub Copilot" />
              <AIToolName>GitHub Copilot</AIToolName>
              <AIToolDescription>Expert at utilizing Copilot for code generation, completion, and optimization to accelerate development.</AIToolDescription>
            </AIToolCard>
            <AIToolCard className="animate-on-scroll hidden">
              <AIToolLogo src={`${process.env.PUBLIC_URL}/images/ai_tools/chat_gpt_logo.png`} alt="ChatGPT" />
              <AIToolName>ChatGPT</AIToolName>
              <AIToolDescription>Proficient in using ChatGPT for problem-solving, code debugging, and generating innovative solutions.</AIToolDescription>
            </AIToolCard>
            <AIToolCard className="animate-on-scroll hidden">
              <AIToolLogo src={`${process.env.PUBLIC_URL}/images/ai_tools/cursor_id_logo.png`} alt="Cursor" />
              <AIToolName>Cursor</AIToolName>
              <AIToolDescription>Skilled with Cursor's AI-powered editing capabilities to enhance code quality and development efficiency.</AIToolDescription>
            </AIToolCard>
            <AIToolCard className="animate-on-scroll hidden">
              <AIToolLogo src={`${process.env.PUBLIC_URL}/images/ai_tools/visual_studio_code_logo.png`} alt="VS Code AI Extensions" />
              <AIToolName>VS Code AI</AIToolName>
              <AIToolDescription>Experienced with VS Code AI extensions that enhance coding productivity and enable intelligent workflows.</AIToolDescription>
            </AIToolCard>
          </AIToolsGrid>
        </AIToolsSection>
      </AboutContainer>
      <SectionDivider section="about" />
    </>
  );
};

export default About; 