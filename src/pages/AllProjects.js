import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projectsData } from '../data/projectsData';
import { FiGithub, FiExternalLink, FiEye, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ProjectModal from '../components/Projects/ProjectModal';

const AllProjectsContainer = styled.div`
  padding: 80px 10% 100px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f5 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,68,68,0.03) 0%, transparent 70%);
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(30px, 30px) rotate(5deg);
    }
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
  margin-bottom: 50px;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.9) 100%);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.8);
  
  @media screen and (max-width: 768px) {
    padding: 30px 15px;
    margin-bottom: 30px;
  }
`;

const PageTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  text-align: center;
  position: relative;
  letter-spacing: -1px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #ff4444 0%, #ff6b6b 50%, #ff4444 100%);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(255, 68, 68, 0.3);
  }
  
  @media screen and (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 12px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 0;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  padding: 12px;
  background: rgba(255,255,255,0.6);
  border-radius: 16px;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.04);
  
  @media screen and (max-width: 768px) {
    gap: 8px;
    padding: 8px;
  }
`;

const FilterButton = styled.button`
  padding: 14px 32px;
  background: ${props => props.className?.includes('active') 
    ? 'linear-gradient(135deg, #ff4444 0%, #ff6b6b 100%)' 
    : 'rgba(255,255,255,0.9)'};
  color: ${props => props.className?.includes('active') ? '#ffffff' : '#333'};
  border: 2px solid ${props => props.className?.includes('active') ? 'transparent' : 'rgba(0,0,0,0.08)'};
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.className?.includes('active') 
    ? '0 4px 12px rgba(255, 68, 68, 0.3)' 
    : '0 2px 8px rgba(0,0,0,0.04)'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.className?.includes('active') 
      ? '0 6px 20px rgba(255, 68, 68, 0.4)' 
      : '0 4px 16px rgba(0,0,0,0.1)'};
    border-color: ${props => props.className?.includes('active') ? 'transparent' : 'rgba(255, 68, 68, 0.3)'};
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin-top: 20px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProjectItem = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 68, 68, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProjectImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.02) 100%);
    pointer-events: none;
  }
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
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #333;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  border: 2px solid rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 68, 68, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }
  
  svg {
    margin-right: 8px;
    font-size: 20px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
  
  ${ProjectCardOverlay}:hover & {
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 68, 68, 0.3);
    
    &::before {
      width: 300px;
      height: 300px;
    }
    
    svg {
      transform: rotate(5deg) scale(1.1);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
  line-height: 1.4;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff4444, #ff6b6b);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  ${ProjectItem}:hover & {
    letter-spacing: 0.5px;
    
    &::after {
      width: 100%;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 16px;
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
  margin: 0 0 18px 0;
  gap: 8px;
`;

const TechItem = styled.li`
  font-size: 12px;
  color: #666;
  padding: 6px 14px;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
    color: #333;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    border-color: rgba(0,0,0,0.1);
    
    &::before {
      left: 100%;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid rgba(0,0,0,0.06);
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  font-size: 20px;
  color: #555;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.06);
  position: relative;
  
  svg {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
    color: white;
    transform: translateY(-4px) rotate(5deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border-color: transparent;
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &:active {
    transform: translateY(-2px) rotate(5deg) scale(0.95);
  }
`;

const ToolLogosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const ToolLogoImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.15);
  }
`;

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSubFilter, setActiveSubFilter] = useState(null);
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

  const aiSubCategories = ['AI Designs', 'Tools', 'AI Applications'];

  const filteredProjects = (() => {
    if (activeFilter === 'all') {
      return projectsData;
    }
    
    // If AI filter is active and a subcategory is selected
    if (activeFilter === 'AI' && activeSubFilter) {
      return projectsData.filter(project => project.category === activeSubFilter);
    }
    
    // If AI filter is active but no subcategory selected, show all AI projects
    if (activeFilter === 'AI') {
      return projectsData.filter(project =>
        project.technologies && project.technologies.some(tech =>
          projectCategories['AI'].includes(tech)
        )
      );
    }
    
    // For other filters
    return projectsData.filter(project =>
      project.technologies && project.technologies.some(tech =>
        projectCategories[activeFilter] && projectCategories[activeFilter].includes(tech)
      )
    );
  })();

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
        <PageSubtitle>
          Explore my portfolio of AI-driven applications, data analytics, and innovative solutions
        </PageSubtitle>
        
        <FilterSection>
          <FilterLabel>Filter by Category</FilterLabel>
          <FilterContainer>
            <FilterButton
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => {
                setActiveFilter('all');
                setActiveSubFilter(null);
              }}
            >
              All
            </FilterButton>
            {['AI', 'Data', 'Industrial Automation'].map(filter => (
              <FilterButton
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveSubFilter(null);
                }}
              >
                {filter}
              </FilterButton>
            ))}
          </FilterContainer>
          
          {activeFilter === 'AI' && (
            <>
              <FilterLabel style={{ marginTop: '10px' }}>AI Subcategories</FilterLabel>
              <FilterContainer>
                {aiSubCategories.map(subCategory => (
                  <FilterButton
                    key={subCategory}
                    className={activeSubFilter === subCategory ? 'active' : ''}
                    onClick={() => setActiveSubFilter(activeSubFilter === subCategory ? null : subCategory)}
                  >
                    {subCategory}
                  </FilterButton>
                ))}
              </FilterContainer>
            </>
          )}
        </FilterSection>
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
                  <FiEye /> <span>View Project</span>
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
              {project.toolLogos && project.toolLogos.length > 0 && (
                <ToolLogosContainer>
                  {project.toolLogos.map((tool, index) => (
                    <ToolLogoImage
                      key={index}
                      src={tool.logo}
                      alt={tool.name}
                      title={tool.name}
                    />
                  ))}
                </ToolLogosContainer>
              )}
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