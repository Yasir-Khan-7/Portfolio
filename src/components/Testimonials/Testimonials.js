import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from 'react-icons/fi';
import SectionDivider from '../SectionDivider';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonialData = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/images/testimonial/review_1.png',
    alt: 'Client testimonial 1'
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/images/testimonial/review_2.png',
    alt: 'Client testimonial 2'
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/images/testimonial/review_3.png',
    alt: 'Client testimonial 3'
  }
];

const TestimonialsContainer = styled.section`
  padding: 150px 10%;
  position: relative;
  background: ${props => props.theme.colors.background};
  
  @media screen and (max-width: 768px) {
    padding: 80px 5%;
  }
`;

const TestimonialsHeading = styled.h2`
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
    background-color: ${props => props.theme.colors.testimonials.accent};
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

const TestimonialsSubheading = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

const TestimonialCarousel = styled.div`
  display: flex;
  transition: transform 0.8s ease-in-out;
`;

const TestimonialItem = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.95);
  transition: transform 0.8s ease-in-out;
  
  &.active {
    transform: scale(1);
  }
  
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 2px;
  }
`;

const TestimonialImage = styled.img`
  max-width: 100%;
  width: 650px;
  height: auto;
  object-fit: contain;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 2px solid ${props => props.theme.colors.testimonials.accent + '40'};
  padding: 20px;
  background: #ffffff;
  transition: all 0.5s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    border: 2px solid ${props => props.theme.colors.testimonials.accent};
  }
  
  @media screen and (max-width: 768px) {
    padding: 8px;
    width: 100%;
    min-width: 300px;
    border-width: 2px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 6px;
    min-width: 100%;
  }
`;

const ZoomIcon = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: ${props => props.theme.colors.testimonials.accent};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 5;
  
  ${TestimonialItem}:hover & {
    opacity: 0.9;
  }
  
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    bottom: 10px;
    right: 10px;
    /* Make zoom icon always visible on mobile */
    opacity: 0.9;
  }
`;

const ClickInstruction = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => props.theme.colors.testimonials.accent};
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${TestimonialItem}:hover & {
    opacity: 1;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
    bottom: -30px;
    /* Make hint always visible on mobile */
    opacity: 0.9;
  }
`;

const TestimonialImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.testimonials.accent + '30'};
  
  &:hover {
    background: ${props => props.theme.colors.testimonials.highlight};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid ${props => props.theme.colors.testimonials.accent};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    font-size: 22px;
    color: ${props => props.theme.colors.testimonials.accent};
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.colors.testimonials.accent : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

// Modal components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 95%;
  max-height: 95vh;
  position: relative;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  border: 3px solid ${props => props.theme.colors.testimonials.accent};
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  
  @media screen and (max-width: 768px) {
    max-height: 80vh;
    width: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.testimonials.accent};
  border: 2px solid white;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1001;
  
  &:hover {
    transform: scale(1.1);
    background-color: #fff;
    color: ${props => props.theme.colors.testimonials.accent};
    border: 2px solid ${props => props.theme.colors.testimonials.accent};
  }
  
  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: -15px;
    right: -15px;
    font-size: 20px;
  }
`;

// Add a permanent mobile hint
const MobileHint = styled.div`
  display: none;
  text-align: center;
  color: ${props => props.theme.colors.testimonials.accent};
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.testimonials.highlight};
  border: 1px solid ${props => props.theme.colors.testimonials.accent + '40'};
  
  @media screen and (max-width: 768px) {
    display: block;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.9;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
  }
`;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100) {
      goToNext();
    } else if (touchEndX - touchStartX > 100) {
      goToPrev();
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard events for the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <TestimonialsContainer id="testimonials" className="section">
      <SectionDivider section="testimonials" />
      <div className="section-content">
        <TestimonialsHeading>Testimonials</TestimonialsHeading>
        <TestimonialsSubheading>
          Here's what people are saying about my work and collaboration
        </TestimonialsSubheading>

        {/* Add mobile hint */}
        <MobileHint>
          <FiZoomIn style={{ marginRight: '5px', verticalAlign: 'middle' }} />
          Tap on testimonials to view them in full screen
        </MobileHint>

        <CarouselContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <CarouselButton className="prev" onClick={goToPrev}>
            <FiChevronLeft />
          </CarouselButton>

          <TestimonialCarousel style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonialData.map((testimonial, index) => (
              <TestimonialItem
                key={testimonial.id}
                className={index === activeIndex ? 'active' : ''}
              >
                <TestimonialImageWrapper>
                  <TestimonialImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    loading="lazy"
                    onClick={() => openModal(testimonial.image)}
                  />
                  <ZoomIcon>
                    <FiZoomIn size={20} />
                  </ZoomIcon>
                  <ClickInstruction>Click to view full size</ClickInstruction>
                </TestimonialImageWrapper>
              </TestimonialItem>
            ))}
          </TestimonialCarousel>

          <CarouselButton className="next" onClick={goToNext}>
            <FiChevronRight />
          </CarouselButton>
        </CarouselContainer>

        <DotContainer>
          {testimonialData.map((_, index) => (
            <Dot
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </DotContainer>
      </div>

      {/* Modal for enlarged testimonial view */}
      <AnimatePresence>
        {modalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalImage
                src={selectedImage}
                alt="Enlarged testimonial"
              />
              <CloseButton onClick={closeModal}>
                <FiX />
              </CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </TestimonialsContainer>
  );
};

export default Testimonials; 