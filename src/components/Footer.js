import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

// const FooterContainer = styled.footer`
//   display: flex;
//   justify-content: center;
//   padding: 20px;
//   background-color: #0a192f;
//   color: #ccd6f6;
// `;

const IconLink = styled.a`
  margin: 0 15px;
  font-size: 1.5rem;
  color: #64ffda;
  transition: color 0.3s;

  &:hover {
    color: #52d4b8;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #0a192f;

  .social-icons {
    display: flex;
    gap: 20px;

    a {
      color: #64ffda;
      font-size: 1.5rem;
    }
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <IconLink href="https://github.com/Ashi7599" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/ashish-su/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://www.instagram.com/ashish.kundar/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://x.com/AshishS49405338" target="_blank" rel="noopener noreferrer">
        <FaXTwitter />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
