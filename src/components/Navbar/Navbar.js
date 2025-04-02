import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.backgroundDarker};
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 100vw;

  &.scrolled {
    height: 60px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 20px;
  }
`;

const NavLogo = styled.a`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  color: #cccccc;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 5px 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  
  @media ${props => props.theme.breakpoints.md} {
    display: none;
  }
`;

const SocialIcon = styled.a`
  color: #cccccc;
  font-size: 1.2rem;
  margin-left: 15px;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media ${props => props.theme.breakpoints.md} {
    display: block;
    position: absolute;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.backgroundDarker};
  transition: top 0.3s ease-in-out;
  z-index: 999;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow-x: hidden;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const MobileNavItem = styled.li`
  margin: 20px 0;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '20px')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.4s ease;
  transition-delay: ${({ index }) => `${index * 0.1}s`};
`;

const MobileNavLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: inline-block;
  width: auto;
  
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : '#ffffff')};
  transition: all 0.3s ease;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    transition: all 0.3s ease;
  }
  
  &:before {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'translateY(-10px)')};
  }
  
  &:after {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'translateY(10px)')};
  }
`;

const MobileSocialIcons = styled.div`
  display: flex;
  margin-top: 40px;
`;

const MobileSocialIcon = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  margin: 0 15px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';

    // Force any focused element to blur to prevent lingering touch/click states
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  // Handle navigation to ensure proper scroll behavior
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    // Close the menu first
    closeMenu();

    if (targetElement) {
      // Delay scrolling slightly to allow menu closing animation
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      console.log(`Element with selector ${targetId} not found.`);
    }
  };

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <NavLogo href="#">Portfolio</NavLogo>
      </div>

      <div style={{ display: 'flex' }}>
        <NavItems>
          <NavItem>
            <NavLink href="#about">about</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">contact</NavLink>
          </NavItem>
        </NavItems>

        <SocialIcons>
          <SocialIcon
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/yasirkhan71/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon href="https://github.com/Yasir-Khan-7" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </SocialIcon>
        </SocialIcons>
      </div>

      <MobileIcon onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </MobileIcon>

      <MobileMenu isOpen={isOpen}>
        <MobileMenuItems>
          <MobileNavItem isOpen={isOpen} index={0}>
            <MobileNavLink href="#about" onClick={(e) => handleNavLinkClick(e, "#about")}>about</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem isOpen={isOpen} index={1}>
            <MobileNavLink href="#skills" onClick={(e) => handleNavLinkClick(e, "#skills")}>skills</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem isOpen={isOpen} index={2}>
            <MobileNavLink href="#projects" onClick={(e) => handleNavLinkClick(e, "#projects")}>projects</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem isOpen={isOpen} index={3}>
            <MobileNavLink href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>contact</MobileNavLink>
          </MobileNavItem>
        </MobileMenuItems>

        <MobileSocialIcons>
          <MobileSocialIcon
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yasirkhandps7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </MobileSocialIcon>
          <MobileSocialIcon href="https://www.linkedin.com/in/yasirkhan71/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </MobileSocialIcon>
          <MobileSocialIcon href="https://github.com/Yasir-Khan-7" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </MobileSocialIcon>
        </MobileSocialIcons>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar; 