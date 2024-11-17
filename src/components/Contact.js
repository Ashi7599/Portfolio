import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  margin-top: 14%;
  margin-bottom: 7%;
`;

// const Subheading = styled.h4`
//   color: #64ffda;
//   font-size: 20px;
//   font-weight: 500;
//   margin-bottom: 10px;
// `;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ccd6f6;
`;

const ContactText = styled.p`
  font-size: 18px;
  color: #8892b0;
  text-align: center;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const ContactButton = styled.a`
  display: inline-block;
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 12px 24px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
  }
`;

const Tagline = styled(motion.h1)`
  color: #64ffda;
  font-size: 28px;
  margin: 20px 0 10px;
`;

const Contact = () => (
  <ContactSection id='contact'>
    <Tagline initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      About Me.
    </Tagline>
    <Heading>Get In Touch</Heading>
    <ContactText>
      Although I’m not currently looking for any new opportunities, my inbox is always open.
      Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    </ContactText>
    {/* Updated href with mailto link */}
    <ContactButton href="mailto:ashishkundar67@gmail.com?subject=I would like to get in touch with you">Say Hello</ContactButton>
  </ContactSection>
);

export default Contact;


// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const ContactSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 100px 20px;
//   background-color: #0a192f;
//   color: #ccd6f6;
//   margin-top: 14%;
//   margin-bottom: 7%;
// `;

// const Subheading = styled.h4`
//   color: #64ffda;
//   font-size: 20px;
//   font-weight: 500;
//   margin-bottom: 10px;
// `;

// const Heading = styled.h2`
//   font-size: 48px;
//   font-weight: 700;
//   margin-bottom: 20px;
//   color: #ccd6f6;
// `;

// const ContactText = styled.p`
//   font-size: 18px;
//   color: #8892b0;
//   text-align: center;
//   max-width: 600px;
//   margin-bottom: 40px;
//   line-height: 1.5;
// `;

// const ContactButton = styled.a`
//   display: inline-block;
//   border: 2px solid #64ffda;
//   color: #64ffda;
//   padding: 12px 24px;
//   font-size: 18px;
//   text-decoration: none;
//   border-radius: 4px;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #64ffda;
//     color: #0a192f;
//   }
// `;

// const Tagline = styled(motion.h1)`
//   color: #64ffda;
//   font-size: 28px;
//   margin: 20px 0 10px;
// `;

// const Contact = () => (
//   <ContactSection id='contact'>
//     {/* <Subheading>04. What's Next?</Subheading> */}
//     <Tagline initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
//       About Me.
//     </Tagline>
//     <Heading>Get In Touch</Heading>
//     <ContactText>
//       Although I’m not currently looking for any new opportunities, my inbox is always open.
//       Whether you have a question or just want to say hi, I’ll try my best to get back to you!
//     </ContactText>
//     <ContactButton href="ashishkundar67@gmail.com">Say Hello</ContactButton>
//   </ContactSection>
// );

// export default Contact;
