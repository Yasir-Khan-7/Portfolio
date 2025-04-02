import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionDivider from '../SectionDivider';

const SkillsContainer = styled.section`
  padding: 150px 10%;
  position: relative;
  background: ${props => props.theme.colors.background};
  --primary-color: #2c5282; /* Dark blue */
  --primary-light: rgba(44, 82, 130, 0.1);
  --accent-color: #2b6cb0; /* Medium blue */
  --hover-color: #1e4e8c; /* Darker blue for hover states */
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`;

const SkillsHeading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
    bottom: -15px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px;
  margin-bottom: 80px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 10px;
`;

const SkillItem = styled(motion.div)`
  background-color: ${({ active }) => active ? 'var(--primary-light)' : '#ffffff'};
  border: 1px solid ${({ active }) => active ? 'var(--accent-color)' : '#e0e0e0'};
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
    border-color: var(--primary-color);
  }
`;

const SkillName = styled.h4`
  font-size: 16px;
  color: ${({ active }) => active ? 'var(--primary-color)' : '#333333'};
  margin-bottom: 8px;
  font-weight: ${({ active }) => active ? '600' : '500'};
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 5px;
  background-color: #edf2f7;
  border-radius: 3px;
  overflow: hidden;
  
  &:after {
    content: '';
    display: block;
    width: ${({ level }) => `${level}%`};
    height: 100%;
    background-color: var(--accent-color);
    transition: width 1s ease-in-out;
  }
`;

const SkillCloudContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const DecorativeSphere = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 0;
  right: -150px;
  top: 20%;
`;

const SkillsCard = styled.div`
  background-color: #f8fafc;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -20px;
    right: -20px;
    background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-light) 100%);
    width: 150px;
    height: 150px;
    opacity: 0.2;
    border-radius: 50%;
  }
`;

const TabButton = styled.button`
  font-size: 16px;
  padding: 12px 20px;
  background-color: ${({ active }) => active ? 'var(--primary-light)' : 'transparent'};
  border: 1px solid ${({ active }) => active ? 'var(--primary-color)' : '#e0e0e0'};
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
  }
  
  &:focus {
    outline: none;
  }
  
  color: ${({ active }) => active ? 'var(--primary-color)' : '#333333'};
  font-weight: ${({ active }) => active ? '600' : '400'};
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;

// Experience section styles
const ExperienceSection = styled.div`
  margin-top: 60px;
  width: 100%;
`;

const ExperienceHeading = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
`;

const ExperienceCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: var(--primary-light);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  margin-right: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 5px;
`;

const JobTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 5px;
`;

const Duration = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 0;
`;

const ExperienceDesc = styled.div`
  margin-top: 20px;
`;

const ResponsibilitiesTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 15px;
`;

const ResponsibilitiesList = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;
`;

const ResponsibilityItem = styled.li`
  font-size: 15px;
  color: #555555;
  margin-bottom: 8px;
  position: relative;
  
  &::before {
    content: '▸';
    color: var(--primary-color);
    position: absolute;
    left: -20px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const CompanyLink = styled.a`
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    text-decoration: underline;
    color: var(--hover-color);
  }
`;

const Skills = () => {
  const skillsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (headingRef.current) {
          headingRef.current.style.animationPlayState = 'running';
        }

        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
          el.classList.add('show');
        });
      }
    }, {
      threshold: 0.2
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML5 / CSS3', level: 90, active: true },
    { name: 'JavaScript (ES6+)', level: 90, active: true },
    { name: 'React', level: 85, active: true },
    { name: 'TypeScript', level: 80, active: false },
    { name: 'Redux', level: 75, active: false },
    { name: 'SASS / LESS', level: 85, active: false },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80, active: true },
    { name: 'Express', level: 75, active: false },
    { name: 'MongoDB', level: 70, active: false },
    { name: 'RESTful APIs', level: 85, active: true },
    { name: 'GraphQL', level: 60, active: false },
    { name: 'Firebase', level: 70, active: false },
  ];

  return (
    <>
      <SkillsContainer id="skills" ref={skillsRef}>
        <DecorativeSphere
          initial={{ x: '-10vw', y: '30vh' }}
          animate={{ x: '-15vw', y: '30vh' }}
          transition={{ repeat: Infinity, duration: 15, repeatType: 'reverse' }}
        />
        <SkillsHeading ref={headingRef}>Skills & Experience</SkillsHeading>

        <SkillsWrapper className="animate-on-scroll hidden">
          <SkillsContent>
            <SkillCategory>
              <CategoryTitle>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                AI & Data Technologies
              </CategoryTitle>
              <SkillsGrid>
                {[
                  { name: 'Python', level: 90, active: true },
                  { name: 'LLM & Generative AI', level: 85, active: true },
                  { name: 'Data Analysis', level: 80, active: true },
                  { name: 'PowerBI', level: 75, active: false },
                ].map((skill, index) => (
                  <SkillItem
                    key={index}
                    active={skill.active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillName active={skill.active}>{skill.name}</SkillName>
                    <SkillLevel level={skill.level} />
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 6H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 18H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Development & Automation
              </CategoryTitle>
              <SkillsGrid>
                {[
                  { name: 'MySQL', level: 80, active: true },
                  { name: 'Industrial Automation', level: 85, active: true },
                  { name: 'ETL Pipeline Development', level: 75, active: true },
                  { name: 'HTML, CSS & JavaScript', level: 70, active: false },
                ].map((skill, index) => (
                  <SkillItem
                    key={index}
                    active={skill.active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <SkillName active={skill.active}>{skill.name}</SkillName>
                    <SkillLevel level={skill.level} />
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillCategory>
          </SkillsContent>

          {/* Experience Section */}
          <ExperienceSection className="animate-on-scroll hidden">
            <ExperienceHeading>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional Experience
            </ExperienceHeading>

            <ExperienceCard>
              <ExperienceHeader>
                <CompanyLogo src={`${process.env.PUBLIC_URL}/images/experience/dataventiv_logo.png`} alt="Dataventiv Logo" />
                <ExperienceInfo>
                  <CompanyName>Dataventiv</CompanyName>
                  <JobTitle>Python Developer → Data Engineer</JobTitle>
                  <Duration>June 21, 2024 - January 2025</Duration>
                </ExperienceInfo>
              </ExperienceHeader>

              <ExperienceDesc>
                <ResponsibilitiesTitle>Career Progression:</ResponsibilitiesTitle>
                <p><strong>Started as Python Developer Intern (June - September 2024)</strong></p>
                <ResponsibilitiesList>
                  <ResponsibilityItem>Developed Python-based data simulator for Modbus TCP/IP communication with industrial devices</ResponsibilityItem>
                  <ResponsibilityItem>Designed and implemented SCADA screens for industrial automation projects</ResponsibilityItem>
                  <ResponsibilityItem>Built human-machine interfaces using Ignition Inductive Automation platform</ResponsibilityItem>
                  <ResponsibilityItem>Implemented class-based programming with proper documentation</ResponsibilityItem>
                </ResponsibilitiesList>

                <p><strong>Promoted to Data Engineer (October 2024 - January 2025)</strong></p>
                <ResponsibilitiesList>
                  <ResponsibilityItem>Developed GUI applications for Kepware and Canary configuration generators</ResponsibilityItem>
                  <ResponsibilityItem>Built data pipelines using Apache Spark, Kafka, and Airflow</ResponsibilityItem>
                  <ResponsibilityItem>Containerized applications using Docker for deployment and scalability</ResponsibilityItem>
                  <ResponsibilityItem>Designed Kubernetes-based deployment architecture</ResponsibilityItem>
                  <ResponsibilityItem>Worked with Linux-based systems on Raspberry Pi 4 for engineering applications</ResponsibilityItem>
                </ResponsibilitiesList>
                <p>Built comprehensive data collection and monitoring systems for industrial clients, progressing from simulation development to full data engineering pipeline implementation.</p>
                <CompanyLink href="https://dataventiv.com" target="_blank" rel="noopener noreferrer">
                  Visit Company Website
                </CompanyLink>
              </ExperienceDesc>
            </ExperienceCard>

            <ExperienceCard>
              <ExperienceHeader>
                <CompanyLogo src={`${process.env.PUBLIC_URL}/images/experience/sysbi_technology_logo.png`} alt="Sysbi Solutions Logo" />
                <ExperienceInfo>
                  <CompanyName>Sysbi Solutions Pvt Ltd</CompanyName>
                  <JobTitle>Frontend Developer Internee</JobTitle>
                  <Duration>July 10, 2023 - August 10, 2023</Duration>
                </ExperienceInfo>
              </ExperienceHeader>

              <ExperienceDesc>
                <ResponsibilitiesTitle>Key Roles & Responsibilities:</ResponsibilitiesTitle>
                <ResponsibilitiesList>
                  <ResponsibilityItem>Writing efficient codes</ResponsibilityItem>
                  <ResponsibilityItem>Creating applications using HTML, CSS and JavaScript</ResponsibilityItem>
                  <ResponsibilityItem>Server side validation using PHP</ResponsibilityItem>
                  <ResponsibilityItem>Interactive behavior using jQuery</ResponsibilityItem>
                  <ResponsibilityItem>Maintaining software documentation</ResponsibilityItem>
                  <ResponsibilityItem>Maintaining a good behavior and coordination within a team</ResponsibilityItem>
                  <ResponsibilityItem>Building responsive UI components with React JS</ResponsibilityItem>
                </ResponsibilitiesList>
                <p>Showed initiative necessary for long-term success within the organization, demonstrated excellent skills while remaining focused on overall duties and project requirements.</p>
                <CompanyLink href="https://sysbitechies.uk" target="_blank" rel="noopener noreferrer">
                  Visit Company Website
                </CompanyLink>
              </ExperienceDesc>
            </ExperienceCard>
          </ExperienceSection>
        </SkillsWrapper>
      </SkillsContainer>
      <SectionDivider section="skills" />
    </>
  );
};

export default Skills; 