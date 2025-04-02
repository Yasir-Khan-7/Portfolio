import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import theme from './theme';
import Loader from './components/Loader/Loader';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

function App() {
    const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Track scroll progress
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = window.scrollY / totalHeight;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        // Setup scroll animations
        const setupScrollAnimations = () => {
            // Add smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        // Additional delay for mobile menu close animation to complete
                        setTimeout(() => {
                            window.scrollTo({
                                top: targetElement.offsetTop - 70, // Slightly reduced offset for better positioning
                                behavior: 'smooth'
                            });
                        }, 50);
                    }
                });
            });

            // Check for mobile devices to show appropriate navigation buttons
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
                // Enable direct contact button on hero section for mobile
                const contactButtons = document.querySelectorAll('.contact-cta-button');
                contactButtons.forEach(button => {
                    button.addEventListener('click', function (e) {
                        e.preventDefault();
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            window.scrollTo({
                                top: contactSection.offsetTop - 70,
                                behavior: 'smooth'
                            });
                        }
                    });
                });
            }

            // Add parallax effect to sections
            const parallaxSections = document.querySelectorAll('.section');

            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;

                parallaxSections.forEach(section => {
                    if (!section) return;

                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionMiddle = sectionTop + sectionHeight / 2;
                    const distanceFromMiddle = scrollPosition - sectionMiddle;
                    const parallaxFactor = 0.15;

                    // Apply subtle parallax effect to section contents
                    const content = section.querySelector('.section-content');
                    if (content) {
                        content.style.transform = `translateY(${distanceFromMiddle * parallaxFactor}px)`;
                    }
                });
            });
        };

        if (!loading) {
            setupScrollAnimations();
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<AllProjects />} />
                    </Routes>
                </Router>
            )}
        </ThemeProvider>
    );
}

export default App; 