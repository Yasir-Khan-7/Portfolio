import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { BiCodeAlt } from 'react-icons/bi';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  z-index: 9999;
  flex-direction: column;
`;

const LoaderContent = styled.div`
  text-align: center;
`;

const LoadingText = styled(motion.h2)`
  font-size: 24px;
  color: #ffffff;
  margin-top: 30px;
  font-family: ${props => props.theme.fonts.code};
  letter-spacing: 3px;
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 15px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e0e0e0, #cccccc);
  border-radius: 4px;
`;

const LoaderIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
`;

const pulseVariant = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const progressVariant = {
    initial: { width: 0 },
    animate: {
        width: "100%",
        transition: { duration: 3, ease: "easeInOut" }
    }
};

const Loader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof setLoading === 'function') {
                setLoading(false);
            }
        }, 3500);

        return () => {
            clearTimeout(timer);
        };
    }, [setLoading]);

    return (
        <AnimatePresence>
            <LoaderContainer
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                <LoaderContent>
                    <LoaderIcon
                        variants={pulseVariant}
                        initial="initial"
                        animate="animate"
                    >
                        <BiCodeAlt size={40} color="#ffffff" />
                    </LoaderIcon>

                    <LoadingText
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                    >
                        LOADING
                    </LoadingText>

                    <ProgressBar>
                        <Progress
                            variants={progressVariant}
                            initial="initial"
                            animate="animate"
                        />
                    </ProgressBar>
                </LoaderContent>
            </LoaderContainer>
        </AnimatePresence>
    );
};

export default Loader; 