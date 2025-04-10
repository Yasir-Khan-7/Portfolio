import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import SectionDivider from '../SectionDivider';

// Removed EmailJS import as we'll use Formspree instead

const ContactContainer = styled.section`
  padding: 150px 10%;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
  
  @media screen and (max-width: 768px) {
    padding: 100px 5%;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ContactHeading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${props => props.theme.colors.contact.accent};
    bottom: -15px;
    left: 0;
    animation: borderFadeIn 1s ease forwards;
    animation-play-state: paused;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactSubheading = styled.h3`
  font-size: 24px;
  font-weight: 400;
  color: ${props => props.theme.colors.contact.accent};
  margin-bottom: 30px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #000000;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${props => props.theme.colors.contact.accent};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.contact.highlight};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #000000;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    border-color: ${props => props.theme.colors.contact.accent};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.contact.highlight};
  }
`;

const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 16px;
  color: #666666;
  pointer-events: none;
  transition: all 0.3s ease;
  
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ &,
  ${Textarea}:focus ~ &,
  ${Textarea}:not(:placeholder-shown) ~ & {
    top: -10px;
    left: 10px;
    font-size: 12px;
    padding: 0 5px;
    background-color: white;
    color: ${props => props.theme.colors.contact.accent};
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${props => props.theme.colors.contact.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 20px;
  width: auto;
  min-width: 180px;
  
  svg {
    margin-left: 10px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${props => props.theme.colors.contact.highlight};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.contact.highlight};
  border: 1px solid ${props => props.theme.colors.contact.accent};
  border-radius: 8px;
  padding: 30px;
  margin-top: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 40px;
    color: ${props => props.theme.colors.contact.accent};
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }
`;

const SuccessOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
`;

const SuccessModal = styled(motion.div)`
  background-color: #fff8f8;
  border-radius: 12px;
  border-left: 5px solid ${props => props.theme.colors.contact.accent};
  padding: 30px 40px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  
  svg {
    font-size: 50px;
    color: ${props => props.theme.colors.contact.accent};
    margin-bottom: 20px;
  }
  
  h4 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
  }
  
  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 25px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #333;
  }
`;

const ErrorMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff0f0;
  border: 1px solid #e74c3c;
  border-radius: 8px;
  padding: 30px;
  margin-top: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 40px;
    color: #e74c3c;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #000000;
    text-align: center;
  }
`;

const DecorativeSphere = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.theme.colors.contact.highlight} 0%, transparent 70%);
  filter: blur(100px);
  z-index: 0;
`;

// Add a button for direct navigation to the contact section from anywhere
const GetInTouchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: ${props => props.theme.colors.contact.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${props => props.theme.colors.contact.highlight};
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const contactRef = useRef(null);
  const headingRef = useRef(null);
  const form = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (headingRef.current) {
          headingRef.current.style.animationPlayState = 'running';
        }

        entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('show');
          }, index * 200);
        });
      }
    }, {
      threshold: 0.2
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSubmitting(true);
    setSubmitError(null);

    // Get the form data
    const formElement = e.target;
    const formData = new FormData(formElement);

    // Submit to Formspree using fetch
    fetch("https://formspree.io/f/mwplnrda", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          // Display success message
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form fields
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });

          // Automatically reset the success message after 6 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 6000);
        } else {
          // Handle error
          return response.json().then(data => {
            throw new Error(data.error || "Form submission failed");
          });
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        setIsSubmitting(false);
        setSubmitError(error.message || "Failed to send your message. Please try again later.");

        // Automatically reset the error message after 6 seconds
        setTimeout(() => {
          setSubmitError(null);
        }, 6000);
      });
  };

  const closeSuccessModal = () => {
    setIsSubmitted(false);
  };

  const navigateToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <ContactContainer id="contact" ref={contactRef}>
        <DecorativeSphere
          initial={{ x: '80vw', y: '30vh' }}
          animate={{ x: '70vw', y: '30vh' }}
          transition={{ repeat: Infinity, duration: 15, repeatType: 'reverse' }}
        />

        <ContactContent>
          <ContactHeading ref={headingRef}>Get In Touch</ContactHeading>
          <ContactSubheading className="animate-on-scroll hidden">Let's build something amazing together</ContactSubheading>
          <ContactText className="animate-on-scroll hidden">
            I'm currently available for freelance work and open to new opportunities.
            Whether you have a project in mind or just want to say hello, I'd love to hear from you!
          </ContactText>

          <GetInTouchButton
            className="animate-on-scroll hidden"
            onClick={navigateToContact}
            style={{ display: 'none' }} // Only shown programmatically when needed
          >
            Contact Me Now
          </GetInTouchButton>

          <ContactForm
            className="animate-on-scroll hidden"
            onSubmit={handleSubmit}
            method="POST"
          >
            <InputGroup>
              <Input
                type="text"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Label>Your Name</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Label>Your Email</Label>
            </InputGroup>
            <InputGroup>
              <Input
                type="text"
                name="subject"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Label>Subject</Label>
            </InputGroup>
            <InputGroup>
              <Textarea
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Label>Your Message</Label>
            </InputGroup>
            {/* Hidden input with recipient email - will be used by Formspree */}
            <Input
              type="hidden"
              name="_replyto"
              value={formData.email}
            />
            <Input
              type="hidden"
              name="_subject"
              value={formData.subject || "New message from your portfolio website"}
            />
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <FiSend />}
            </SubmitButton>
          </ContactForm>

          {submitError && (
            <ErrorMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FiAlertCircle />
              <p>{submitError}</p>
            </ErrorMessage>
          )}
        </ContactContent>
      </ContactContainer>

      {isSubmitted && (
        <SuccessOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SuccessModal
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <CloseButton onClick={closeSuccessModal}>×</CloseButton>
            <FiCheckCircle />
            <h4>Message Sent!</h4>
            <p>Thank you for your message! I'll get back to you as soon as possible.</p>
          </SuccessModal>
        </SuccessOverlay>
      )}

      <SectionDivider section="contact" />
    </>
  );
};

export default Contact; 