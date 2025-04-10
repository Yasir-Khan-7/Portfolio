import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px #64ffda; }
  50% { box-shadow: 0 0 20px #64ffda; }
  100% { box-shadow: 0 0 5px #64ffda; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: #64ffda;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  position: absolute;
`;

const OuterRing = styled(Spinner)`
  border-width: 3px;
`;

const MiddleRing = styled(Spinner)`
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: #64ffda;
  animation-duration: 1.2s;
  animation-direction: reverse;
`;

const InnerRing = styled(Spinner)`
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: #64ffda;
  animation-duration: 0.9s;
`;

const LoadingText = styled.div`
  color: #64ffda;
  font-size: 16px;
  letter-spacing: 2px;
  animation: ${glow} 2s ease-in-out infinite;
  font-family: 'Poppins', sans-serif;
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <SpinnerContainer>
                <OuterRing />
                <MiddleRing />
                <InnerRing />
            </SpinnerContainer>
            <LoadingText>LOADING</LoadingText>
        </LoaderContainer>
    );
};

export default Loader; 