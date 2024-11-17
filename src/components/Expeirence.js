import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // padding: 50px;
  background-color: #0a192f;
  color: #ccd6f6;
  margin-top: 50px;
`;

// const ExperienceSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   background-color: #0a192f;
//   color: #ccd6f6;
//   margin-top: 50px;
//   width: 100%;

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;


// const TabList = styled.div`
//   display: flex;
//   flex-direction: row;
//   overflow-x: auto;
//   margin-bottom: 20px;

//   @media (min-width: 768px) {
//     flex-direction: column;
//     margin-right: 20px;
//     width: 200px;
//   }
// `;


const TabList = styled.div`
  display: flex;
  flex-direction: column;
  // margin-left: 10%;
  width: 30%
`;

// const Tab = styled.button`
//   background-color: transparent;
//   border: none;
//   color: ${(props) => (props.isActive ? "#64ffda" : "#8892b0")};
//   font-size: 18px;
//   text-align: left;
//   padding: 10px;
//   cursor: pointer;
//   transition: color 0.3s ease;
//   min-width: 150px;

//   &:hover {
//     color: #64ffda;
//   }
// `;


const Tab = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isActive ? "#64ffda" : "#8892b0")};
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
  // padding: 10px 0;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight:bold;

  &:hover {
    color: #64ffda;
  }
`;

const Subheading = styled.h4`
  color: #64ffda;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const JobDetails = styled.div`
  flex-grow: 1;
  border-left: 1px solid #64ffda;
  padding-left: 20px;
  width: 70%;
  // margin-right: 10%;
`;

// const JobDetails = styled.div`
//   flex-grow: 1;
//   position: relative;
//   padding-left: 20px;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 1px;
//     height: 100%;
//     background-color: #64ffda;
//   }
// `;


const JobTitle = styled.h3`
  font-size: 24px;
  color: #ccd6f6;
`;

const JobDuration = styled.p`
  font-size: 16px;
  color: #8892b0;
`;

const JobDescription = styled.ul`
  font-size: 16px;
  color: #8892b0;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`;

const BodyExp = styled.div`
  padding: 0 10%;
  margin-top: 20%;
  // width: 60%;
  // marginLeft: 25%;
  // max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Tagline = styled(motion.h1)`
  color: #64ffda;
  font-size: 28px;
  margin: 20px 0 10px;
`;

const AboutText = styled.p`
// padding: 0 10%;
  font-size: 18px;
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 1000px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const SkillPill = styled.span`
  background-color: #112240;
  color: #64ffda;
  padding: 5px 15px;
  border-radius: 25px;
  font-size: 0.9rem;
`;

const experiences = [
  {
    company: "Kaiser Permanente",
    role: "Software Developer",
    duration: "May 2024 – Present",
    description: [
      "Developed a 'Follow Me' feature in React.js that ensured consistent content synchronization across all duplicate browser tabs, improving user experience by maintaining the same context in multiple tabs.",
      "Overrode the existing bot frame functionality using React.js to dynamically display content as specified by the content team, enhancing the flexibility and responsiveness of the chatbot interface.",
      "Implemented a sign-on screen for unauthenticated paths in the chatbot, ensuring secure access control and providing a seamless user experience for managing authentication flows.",
      "Implemented useEffect to handle fetch operations and manage side effects in functional components, optimizing performance and ensuring effective state management.",
    ],
    skills: [
      "React.js",
      "Redux",
      "Node.js",
      "Typescript",
      "Tailwind",
      "SCSS",
      "React Testing Library",
      "Enzyme",
    ],
  },
  {
    company: "CCX",
    role: "Software Engineer",
    duration: "Jan 2024 – May 2024",
    description: [
      "Handled form submission with server-side validation using Redux Thunk, asynchronously posting form data to the server. This approach ensured smooth state management and robust error handling throughout the submission process.",
      "Integrated D3.js charts into the React application to leverage advanced data visualization techniques, ensuring dynamic and interactive chart components that enhance the user experience and data insights.",
      "Implemented and managed GraphQL APIs to enhance data querying efficiency and flexibility, demonstrating proficiency in designing and optimizing schemas while effectively integrating with diverse data sources.",
    ],
    skills: [
      "React.js",
      "Redux",
      "JQuery",
      "GraphQl",
      "Typescript",
      "SCSS",
      "D3js",
      "React Testing Library",
      "Enzyme",
    ],
  },
  {
    company: "Macys",
    role: "Jr. Software Developer",
    duration: "Nov 2021 –  Jan 2024",
    description: [
      "Optimized the application's initial load time by 25% through the implementation of various performance improvement strategies, including code splitting, chunking, and efficient caching practices.",
      "Written unit test cases for all components using React Testing Library (RTL) and Enzyme, achieving an overall test coverage acceptance criteria of over 80%, with branch, line, and function coverage exceeding 80%",
      "Implemented protected routes to control access to different parts of the application based on user roles or authentication status.",
      "Developed a Chrome extension and linked it to the main application, facilitating easier connectivity with printers and scanners to enhance the user experience.",
      "Implemented custom hooks within the extension to streamline the retrieval and updating of local storage data from the main application, thereby enhancing data management capabilities.",
      "Developed CRUD operations to enable administrative access to manage resources.",
    ],
    skills: [
      "React.js",
      "Redux",
      "Material UI",
      "Node.js",
      "Javascipt",
      "Typescript",
      "SCSS",
      "React Testing Library",
      "Enzyme",
    ],
  },
  // Add more experiences as needed
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BodyExp
      id="experience"
      className="expericeBody"
      // style={{ padding: "50px", marginTop: "100px", width: '60%', marginLeft: '25%',
      //   display: flex;
      //   flex-direction: column;
      //   align-items: center;
      //   justify-content: center; }}
    >
      <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Where I've Worked.
      </Tagline>
      <AboutText>
        At Cognizant, I worked as a Front-End Developer, where I collaborated
        with cross-functional teams to deliver high-quality, responsive web
        applications. My primary focus was on building efficient, reusable
        components using React.js, TypeScript, and MUI, while also ensuring the
        UI adhered to the best accessibility and performance standards.
      </AboutText>
      <AboutText>
        Below are some of the Projects that i had been a part of at Cognizant,
      </AboutText>
      <ExperienceSection>
        <TabList>
          {experiences.map((experience, index) => (
            <Tab
              key={index}
              isActive={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {experience.company}
            </Tab>
          ))}
        </TabList>
        <JobDetails>
          <JobTitle>
            {experiences[selectedIndex].role} @{" "}
            {experiences[selectedIndex].company}
          </JobTitle>
          <JobDuration>{experiences[selectedIndex].duration}</JobDuration>
          <JobDescription>
            {experiences[selectedIndex].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </JobDescription>
          <SkillsContainer>
            {/* <SkillPill> */}
            {experiences[selectedIndex].skills.map((item, index) => (
              <SkillPill key={index}>{item}</SkillPill>
            ))}
            {/* </SkillPill> */}
          </SkillsContainer>
        </JobDetails>
      </ExperienceSection>
    </BodyExp>
  );
};

export default Experience;

// import React from 'react';
// import styled from 'styled-components';

// // const ExperienceSection = styled.section`
// //   padding: 50px 20px;
// //   background-color: #0a192f;
// //   color: #ccd6f6;
// // `;

// const ExperienceSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 50px 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-around;
//     flex-wrap: wrap;
//   }

//   .experience-item {
//     width: 90%;
//     max-width: 300px;
//     margin: 20px;
//     padding: 20px;
//     background: #1e1e1e;
//     border-radius: 10px;

//     @media (min-width: 768px) {
//       width: 45%;
//     }
//   }
// `;

// const ExperienceContainer = styled.div`
//   margin-bottom: 40px;
// `;

// const CompanyTitle = styled.h3`
//   color: #64ffda;
// `;

// const ProjectList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ProjectItem = styled.li`
//   margin: 10px 0;
//   padding-left: 15px;
//   position: relative;

//   &::before {
//     content: '•';
//     color: #64ffda;
//     position: absolute;
//     left: 0;
//   }
// `;

// const SkillsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-top: 10px;
// `;

// const SkillPill = styled.span`
//   background-color: #112240;
//   color: #64ffda;
//   padding: 5px 15px;
//   border-radius: 25px;
//   font-size: 0.9rem;
// `;

// const Experience = () => {
//   return (
//     <ExperienceSection id="experience">
//       <h2>Experience</h2>

//       <ExperienceContainer>
//         <CompanyTitle>Company A (Jan 2021 - Dec 2022)</CompanyTitle>
//         <p>Role: Frontend Developer</p>
//         <ProjectList>
//           <ProjectItem>Developed a responsive e-commerce platform using React.js.</ProjectItem>
//           <ProjectItem>Integrated RESTful APIs and optimized UI performance.</ProjectItem>
//           <ProjectItem>Collaborated with the design team to implement new features.</ProjectItem>
//         </ProjectList>
//         <SkillsContainer>
//           <SkillPill>React.js</SkillPill>
//           <SkillPill>JavaScript</SkillPill>
//           <SkillPill>Redux</SkillPill>
//           <SkillPill>CSS</SkillPill>
//         </SkillsContainer>
//       </ExperienceContainer>

//       <ExperienceContainer>
//         <CompanyTitle>Company B (Feb 2020 - Dec 2020)</CompanyTitle>
//         <p>Role: Junior Web Developer</p>
//         <ProjectList>
//           <ProjectItem>Worked on a CRM tool to enhance customer management.</ProjectItem>
//           <ProjectItem>Refactored legacy code for better maintainability.</ProjectItem>
//           <ProjectItem>Assisted in transitioning the app from vanilla JavaScript to React.</ProjectItem>
//         </ProjectList>
//         <SkillsContainer>
//           <SkillPill>HTML</SkillPill>
//           <SkillPill>CSS</SkillPill>
//           <SkillPill>JavaScript</SkillPill>
//           <SkillPill>React.js</SkillPill>
//         </SkillsContainer>
//       </ExperienceContainer>

//       {/* Add more experiences as needed */}
//     </ExperienceSection>
//   );
// };

// export default Experience;
