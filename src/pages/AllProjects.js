import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectsData } from '../data/projectsData';
import { FiGithub, FiExternalLink, FiEye, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProjectModal from '../components/Projects/ProjectModal';

const AllProjectsContainer = styled.div`
  padding: 80px 10% 100px;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
  }
  
  @media screen and (max-width: 768px) {
    padding: 60px 5% 80px;
  }
`;

const BackToHome = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  background: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #333;
  }
  
  svg {
    font-size: 24px;
  }
  
  @media screen and (max-width: 768px) {
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    
    svg {
      font-size: 20px;
    }
  }
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, ${props => props.theme.colors.projects.accent}, ${props => props.theme.colors.projects.accentHover});
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const FilterButton = styled.button`
  padding: 12px 30px;
  background: transparent;
  color: #333;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ff4444;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover, &.active {
    color: #333;
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  &.active {
    font-weight: 600;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 10px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
    pointer-events: none;
    z-index: 3;
  }
`;

const ProjectImageContainer = styled.div`
  height: 200px;
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  opacity: 0;
  transition: opacity 0.4s ease;
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
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  transform: translateY(20px);
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
  
  ${ProjectCardOverlay}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  background: linear-gradient(to bottom right, #ffffff, #fcfcfc);
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #555555;
  line-height: 1.5;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
  gap: 8px;
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
  margin-top: 15px;
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

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectCategories = {
    'AI': ['Machine Learning', 'LLM', 'AI', 'Groq LLM', 'Llama 3.3 70B', 'Pydantic AI'],
    'Data': ['Data Science', 'ETL', 'Data Visualization', 'Sales Analytics', 'Business Intelligence'],
    'Industrial Automation': ['Python', 'Streamlit', 'MySQL', 'Smol-agents']
  };

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project =>
      project.technologies && project.technologies.some(tech =>
        projectCategories[activeFilter] && projectCategories[activeFilter].includes(tech)
      )
    );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <AllProjectsContainer>
      <BackToHome onClick={() => navigate('/')} title="Back to Home">
        <FiHome />
      </BackToHome>

      <PageHeader>
        <PageTitle>All Projects</PageTitle>
        <FilterContainer>
          <FilterButton
            className={activeFilter === 'all' ? 'active' : ''}
            onClick={() => setActiveFilter('all')}
          >
            All
          </FilterButton>
          {['AI', 'Data', 'Industrial Automation'].map(filter => (
            <FilterButton
              key={filter}
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterContainer>
      </PageHeader>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectItem
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectImageContainer>
              <ProjectImage
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <ProjectCardOverlay>
                <ViewProjectButton>
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

      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </AllProjectsContainer>
  );
};

export default AllProjects; 