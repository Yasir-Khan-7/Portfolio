import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.backgroundDarker};
  color: white;
  padding: 40px 0;
  border-top: 1px solid #333333;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 24px;
  margin: 0 15px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  text-align: center;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 15px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <FooterLink href="#about">about</FooterLink>
        <FooterLink href="#skills">skills</FooterLink>
        <FooterLink href="#projects">projects</FooterLink>
        <FooterLink href="#contact">contact</FooterLink>
      </FooterNav>
      <SocialContainer>
        <SocialLink
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/yasirkhan71/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/Yasir-Khan-7" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
      </SocialContainer>
      <Copyright>
        © {new Date().getFullYear()} Yasir Khan. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 