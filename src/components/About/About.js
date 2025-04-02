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

        <AboutContentWrapper>
          <AboutTextContent>
            <AboutHeading ref={headingRef}>About Me</AboutHeading>
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
      </AboutContainer>
      <SectionDivider section="about" />
    </>
  );
};

export default About; 