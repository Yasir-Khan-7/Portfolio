import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for floating effect
const float = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-8px, -6px) rotate(-1deg);
  }
  50% {
    transform: translate(-12px, 0) rotate(0deg);
  }
  75% {
    transform: translate(-8px, 6px) rotate(1deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
`;

const CodeBracket = styled.div`
  position: absolute;
  font-family: monospace;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.1);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  font-size: ${props => props.size}px;
  opacity: ${props => props.opacity};
  
  &::after {
    content: '</>';
  }
`;

function CodeBracketsBackground() {
    // Create 25 code brackets with random properties
    const brackets = Array.from({ length: 25 }).map((_, i) => {
        const size = Math.random() * 80 + 20; // Size between 20px and 100px
        const top = Math.random() * 100; // Position between 0% and 100%
        const left = Math.random() * 100;
        const delay = Math.random() * 5; // Delay between 0s and 5s
        const duration = 5 + Math.random() * 10; // Animation duration between 5s and 15s
        const opacity = Math.random() * 0.3 + 0.1; // Opacity between 0.1 and 0.4

        return { size, top, left, delay, duration, opacity, id: i };
    });

    return (
        <Container>
            {brackets.map(({ size, top, left, delay, duration, opacity, id }) => (
                <CodeBracket
                    key={id}
                    style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        animationDuration: `${duration}s`
                    }}
                    size={size}
                    delay={delay}
                    opacity={opacity}
                />
            ))}
        </Container>
    );
}

export default CodeBracketsBackground; 