import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionDivider from '../SectionDivider';

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
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    ${props => props.theme.colors.testimonials.highlight}
  );
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
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
    padding: 15px;
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    border: 2px solid ${props => props.theme.colors.testimonials.accent};
  }
  
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
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
      left: 5px;
    }
    
    &.next {
      right: 5px;
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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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

  return (
    <TestimonialsContainer id="testimonials" className="section">
      <SectionDivider section="testimonials" />
      <div className="section-content">
        <TestimonialsHeading>Testimonials</TestimonialsHeading>
        <TestimonialsSubheading>
          Here's what people are saying about my work and collaboration
        </TestimonialsSubheading>

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
                <TestimonialImage
                  src={testimonial.image}
                  alt={testimonial.alt}
                  loading="lazy"
                />
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
    </TestimonialsContainer>
  );
};

export default Testimonials; 