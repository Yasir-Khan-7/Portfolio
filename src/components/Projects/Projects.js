import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SectionDivider from '../SectionDivider';
import { projectsData } from '../../data/projectsData';

const ProjectsContainer = styled.section`
  padding: 150px 10%;
  position: relative;
  background: ${props => props.theme.colors.background};
  
  /* Custom Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`;

const ProjectsHeading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 60px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${props => props.theme.colors.projects.accent};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 40px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImageContainer = styled.div`
  height: 240px;
  overflow: hidden;
  background-color: #f8f8f8;
  cursor: pointer;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectImageContainer}:hover & {
    transform: scale(1.08);
  }
`;

const ProjectCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  
  ${ProjectImageContainer}:hover & {
    opacity: 1;
  }
`;

const ViewProjectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #333;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
  
  ${ProjectCardOverlay}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    background: #f8f8f8;
    transform: translateY(-2px);
  }
`;

const ProjectContent = styled.div`
  padding: 30px;
  background: linear-gradient(to bottom right, #ffffff, #fcfcfc);
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 15px;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #555555;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
  gap: 12px;
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
  margin-top: 20px;
`;

const ProjectLink = styled.a`
  font-size: 20px;
  color: #555555;
  transition: all 0.3s ease;
  padding: 8px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #ff4444;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #333;
    
    &::after {
      width: 100%;
    }
  }
`;

const FeaturedTag = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => props.theme.colors.projects.accent};
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 4px;
  text-transform: uppercase;
  z-index: 2;
`;

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

const ModalImageFallback = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #888;
  font-size: 24px;
  font-weight: 500;
  border-radius: 8px;
  margin-bottom: 25px;
`;

const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 0;
  padding: 15px 35px;
  background: transparent;
  color: #333;
  border: 2px solid #333;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #333;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    
    &::before {
      width: 100%;
    }
  }
  
  &::after {
    content: '→';
    margin-left: 10px;
    font-size: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 30px;
    font-size: 15px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  background: ${props => props.active ? props.theme.colors.projects.accent : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.projects.accentHover : '#e5e5e5'};
    transform: translateY(-1px);
  }
`;

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({});
  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const sliderTimers = useRef({});

  // Get only the first 4 projects
  const displayedProjects = projectsData.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (headingRef.current) {
          headingRef.current.style.animationPlayState = 'running';
        }

        const projects = entry.target.querySelectorAll('.project-item');
        projects.forEach((project, index) => {
          setTimeout(() => {
            project.classList.add('show');
          }, index * 200);
        });
      }
    }, {
      threshold: 0.1
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Initialize card image indices
    const initialIndices = {};
    projectsData.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCardImageIndices(initialIndices);
  }, []);

  // Function to start card image rotation
  const startCardImageRotation = (projectId) => {
    if (sliderTimers.current[projectId]) {
      clearInterval(sliderTimers.current[projectId]);
    }

    sliderTimers.current[projectId] = setInterval(() => {
      setCardImageIndices(prev => {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !project.images || project.images.length <= 1) return prev;

        const newIndices = { ...prev };
        newIndices[projectId] = (prev[projectId] + 1) % project.images.length;
        return newIndices;
      });
    }, 2000);
  };

  // Function to stop card image rotation
  const stopCardImageRotation = (projectId) => {
    if (sliderTimers.current[projectId]) {
      clearInterval(sliderTimers.current[projectId]);
      sliderTimers.current[projectId] = null;
    }
  };

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      Object.keys(sliderTimers.current).forEach(key => {
        if (sliderTimers.current[key]) {
          clearInterval(sliderTimers.current[key]);
        }
      });
    };
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <>
      <ProjectsContainer id="projects" ref={projectsRef}>
        <ProjectsHeading ref={headingRef}>My Projects</ProjectsHeading>

        <ProjectsGrid>
          {displayedProjects.map((project) => (
            <ProjectItem
              key={project.id}
              className="project-item"
              onMouseEnter={() => startCardImageRotation(project.id)}
              onMouseLeave={() => stopCardImageRotation(project.id)}
            >
              <ProjectImageContainer>
                <ProjectImage
                  src={project.images[cardImageIndices[project.id] || 0]}
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <ProjectCardOverlay>
                  <ViewProjectButton onClick={() => openProjectModal(project)}>
                    <FiEye /> View Project
                  </ViewProjectButton>
                </ProjectCardOverlay>
              </ProjectImageContainer>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.shortDescription}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech, index) => (
                    <TechItem key={index}>{tech}</TechItem>
                  ))}
                </TechList>
                <ProjectLinks>
                  {project.githubLink && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub />
                    </ProjectLink>
                  )}
                  <ProjectLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectsGrid>

        {projectsData.length > 4 && (
          <LoadMoreButton onClick={() => {
            navigate('/projects');
            window.scrollTo(0, 0);
          }}>
            View All Projects
          </LoadMoreButton>
        )}

        {selectedProject && (
          <ModalOverlay onClick={closeProjectModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeProjectModal}>×</CloseButton>
              <ModalTitle>{selectedProject.title}</ModalTitle>

              <ModalImageContainer>
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <ModalImageSlider>
                    <ModalImage
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Screenshot ${currentImageIndex + 1}`}
                      onError={(e) => {
                        console.error(`Failed to load modal image for ${selectedProject.title}`);
                        e.target.style.display = 'none';
                        if (e.target.nextElementSibling) {
                          e.target.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <SlideButton className="prev" onClick={prevImage}>
                          <FiChevronLeft />
                        </SlideButton>
                        <SlideButton className="next" onClick={nextImage}>
                          <FiChevronRight />
                        </SlideButton>
                        <SlideIndicators>
                          {selectedProject.images.map((_, index) => (
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
                ) : (
                  <ModalImageFallback>
                    {selectedProject.title}
                  </ModalImageFallback>
                )}
              </ModalImageContainer>

              <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
              <TechList>
                {selectedProject.technologies.map((tech, index) => (
                  <TechItem key={index}>{tech}</TechItem>
                ))}
              </TechList>
              <ProjectLinks>
                {selectedProject.githubLink && (
                  <ProjectLink
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub />
                  </ProjectLink>
                )}
                <ProjectLink
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink />
                </ProjectLink>
              </ProjectLinks>
            </ModalContent>
          </ModalOverlay>
        )}
      </ProjectsContainer>
      <SectionDivider section="projects" />
    </>
  );
};

export default Projects; 