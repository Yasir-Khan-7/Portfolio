import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 150px;
    height: 100%;
    background-color: ${props => {
    switch (props.section) {
      case 'hero':
        return props.theme.colors.hero.accent;
      case 'about':
        return props.theme.colors.about.accent;
      case 'skills':
        return props.theme.colors.skills.accent;
      case 'projects':
        return props.theme.colors.projects.accent;
      case 'testimonials':
        return props.theme.colors.testimonials.accent;
      case 'contact':
        return props.theme.colors.contact.accent;
      default:
        return '#e0e0e0';
    }
  }};
    transform: translateX(-50%);
    box-shadow: 0 0 8px ${props => {
    switch (props.section) {
      case 'hero':
        return 'rgba(58, 134, 255, 0.6)';
      case 'about':
        return 'rgba(255, 89, 94, 0.6)';
      case 'skills':
        return 'rgba(255, 202, 58, 0.6)';
      case 'projects':
        return 'rgba(138, 201, 38, 0.6)';
      case 'testimonials':
        return 'rgba(106, 76, 147, 0.6)';
      case 'contact':
        return 'rgba(230, 57, 70, 0.6)';
      default:
        return 'rgba(0, 0, 0, 0.1)';
    }
  }};
    opacity: 0.8;
  }
`;

const SectionDivider = ({ section }) => {
  return <Divider section={section} />;
};

export default SectionDivider; 