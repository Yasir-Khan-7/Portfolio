import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid #434343;
  -webkit-overflow-scrolling: touch;
  
  @media screen and (max-width: 768px) {
    padding: 20px;
    max-height: 85vh;
    width: 95%;
  }
`;

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  border-radius: 8px;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ModalImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 25px;
  object-fit: cover;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease;
  font-size: 24px;
  opacity: 1; /* Always visible by default */
  
  /* Only apply hover opacity change on desktop */
  @media (min-width: 769px) {
    opacity: 0.7;
    
    ${ModalImageSlider}:hover & {
      opacity: 1;
    }
    
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  
  &:focus {
    outline: none;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
  
  @media screen and (max-width: 768px) {
    opacity: 1 !important; /* Force visibility on mobile */
    width: 45px;
    height: 45px;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const SlideIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
  
  @media screen and (max-width: 768px) {
    bottom: 30px;
  }
`;

const SlideIndicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: white;
  }
  
  &:focus {
    outline: none;
  }
  
  @media screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
    margin: 0 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: 35px;
  background: white;
`;

const ModalTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 3px;
    background: linear-gradient(to right, #4a86e8, transparent);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

const ModalDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 25px;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
  list-style: none;
  padding: 0;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    gap: 8px;
  }
`;

const TechItem = styled.li`
  font-size: 14px;
  color: #666666;
  padding: 0;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s ease;
  background: none;
  
  &:hover {
    color: #4a86e8;
  }
  
  &::before {
    content: '▸';
    color: #4a86e8;
    margin-right: 8px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
  
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  background: #f5f5f5;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e5e5e5;
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 18px;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleModalContentClick}>
        <CloseButton onClick={onClose}>
          <FiX />
        </CloseButton>

        <ModalTitle>{project.title}</ModalTitle>

        <ModalImageContainer>
          <ModalImageSlider>
            <ModalImage
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
            />
            {project.images.length > 1 && (
              <>
                <SlideButton className="prev" onClick={handlePrevImage}>
                  <FiChevronLeft />
                </SlideButton>
                <SlideButton className="next" onClick={handleNextImage}>
                  <FiChevronRight />
                </SlideButton>
                <SlideIndicators>
                  {project.images.map((_, index) => (
                    <SlideIndicator
                      key={index}
                      active={index === currentImageIndex}
                      onClick={(e) => goToImage(index, e)}
                    />
                  ))}
                </SlideIndicators>
              </>
            )}
          </ModalImageSlider>
        </ModalImageContainer>

        <ModalDescription>{project.fullDescription}</ModalDescription>

        <TechList>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>

        <ProjectLinks>
          {project.githubLink && (
            <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </ProjectLink>
          )}
          <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Live Demo
          </ProjectLink>
        </ProjectLinks>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal; 