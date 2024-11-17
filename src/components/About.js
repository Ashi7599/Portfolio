import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import profilepic from "../images/Ashish_profile.jpg";

// const AboutSection = styled.section`
//   display: flex;
//   align-items: center;
//   padding: 0px 10%;
//   background-color: #0a192f;
//   color: #ccd6f6;
// `;

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0px 10%;
  background-color: #0a192f;
  color: #ccd6f6;

  /* Responsive design */
  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  /* Remove margin for smaller screens */
  @media (max-width: 750px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;


const ContentWrapper = styled.div`
  flex: 2;
`;

const AboutText = styled.p`
  font-size: 18px;
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  list-style: none;
  padding: 0;
  margin: 20px 0;
  color: #8892b0;

  li {
    font-size: 16px;
    margin-bottom: 10px;
    position: relative;
    padding-left: 20px;

    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: #64ffda;
    }
  }
`;

// const ImageWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 50px;
// `;

const Image = styled.img`
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  border: 2px solid #64ffda;
`;

const Tagline = styled(motion.h1)`
  padding: 0px 10%;
  color: #64ffda;
  font-size: 28px;
  margin: 20px 0 10px;
`;

const About = () => (
  <div>
    <Tagline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
    >
      About Me.
    </Tagline>
    <AboutSection>
      
      <ContentWrapper>
        {/* <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        About Me.
      </Tagline> */}
        <AboutText>
          Hi there! I'm Ashish, a passionate front-end developer with 3 years of
          experience in building user-focused, responsive, and accessible web
          applications. I thrive at the intersection of design and development,
          where I create pixel-perfect interfaces that not only look great but
          are also optimized for performance and usability.
        </AboutText>
        <AboutText>
          Currently, I specialize in React.js with a strong focus on modern UI
          libraries like MUI and design frameworks such as Redux and TypeScript.
          I’m also expanding my skill set into Node.js and React Native, aiming
          to build robust, full-stack solutions that deliver seamless user
          experiences.
        </AboutText>
        <AboutText>
          Over the years, I've had the chance to work on a variety of projects,
          from building intuitive interfaces for startups to contributing to
          scalable systems for larger enterprises. I enjoy the challenge of
          translating complex requirements into elegant, maintainable code.
        </AboutText>
        <AboutText>
          When I’m not coding, you can find me exploring new tech, reading up on
          best practices, or experimenting with my side projects. I'm also an
          avid learner, currently diving deeper into backend development to
          broaden my expertise and create even more dynamic, full-featured
          applications.
        </AboutText>
        <AboutText>Let’s create something amazing together!</AboutText>
        {/* <TechList>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Styled-Components</li>
        <li>Redux</li>
      </TechList> */}
      </ContentWrapper>
      <ImageWrapper>
        <Image
          src={profilepic} // Replace this with your actual image source
          alt="Ashish"
        />
      </ImageWrapper>
    </AboutSection>
  </div>
);

export default About;
