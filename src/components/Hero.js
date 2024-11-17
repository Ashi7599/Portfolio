import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import resume from '../files/Ashish_SU_Resume.pdf'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 10%;
  background-color: #0a192f; /* Dark background */
  color: #ccd6f6; /* Light text */
`;

const IntroText = styled(motion.h1)`
  color: #64ffda; /* Slightly greenish color */
  font-size: 20px;
  margin-bottom: 10px;
`;

const NameText = styled(motion.h1)`
  font-size: 80px; /* Adjust size based on screenshot */
  font-weight: 700;
  color: #ccd6f6; /* Light grayish-blue */
  margin: 0;
`;

const Tagline = styled(motion.h1)`
  font-size: 48px;
  color: #8892b0; /* Grayish color */
  margin: 20px 0 10px;
`;

const Description = styled(motion.p)`
  font-size: 18px;
  color: #8892b0;
  max-width: 600px;
`;

const CTAButton = styled(motion.a)`

  display: inline-block;
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 12px 24px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  max-width: 200px;
  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }

`;

const Hero = () => (
  <HeroSection>
    <IntroText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      Hi, my name is
    </IntroText>
    <NameText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      Ashish S U
    </NameText>
    <Tagline initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      I build things for the web.
    </Tagline>
    <Description initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2.5 }}>
      I create dynamic, high-performance web applications using React.js for seamless, responsive front-end experiences and Node.js to build scalable REST APIs for robust back-end functionality.
    </Description>
    <CTAButton 
      href={resume}
      download="Ashish_SU_Resume.pdf"
    >
      Download My Resume
    </CTAButton>
  </HeroSection>
);

export default Hero;
