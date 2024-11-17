import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from '../files/Ashish_SU_Resume.pdf'

// Styled components
const HeaderContainer = styled.header`
  // width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  margin: 0px 20px;
  // background-color: #333;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-100%)"};

  @media (min-width: 750px) {
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 750px) {
    display: none; /* Hide title on mobile view */
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #aaa;
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    right: 0px; /* Extreme left positioning */
  }
`;

const MobileDropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #122542;
  border-radius: 5px;
  
  padding: 20px 0;
  // padding: 5px;
  // border: solid 1px black;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1.2rem;
    transition: color 0.3s;
    text-align: center;

    &:hover {
      color: #aaa;
    }
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

const CTAButton = styled(motion.a)`

  display: inline-block;
  border: 2px solid #64ffda;
  color: #64ffda !important;
  padding: 12px 24px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #64ffda;
    color: #0a192f !important;
  }

  // // display: inline-block;
  // // margin-top: 30px;
  // padding: 10px;
  // // width: 200px;
  // background-color: transparent;
  // border: 1px solid #64ffda;
  // color: #64ffda;
  // font-size: 16px;
  // // border-radius: 15px;
  // text-decoration: none;
  // cursor: pointer;
  // transition: background-color 0.3s ease;

  // &:hover {
  //   background-color: rgba(100, 255, 218, 0.1);
  // }
`;

const CTAButton2 = styled(motion.a)`

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

  // // display: inline-block;
  // // margin-top: 30px;
  // padding: 10px;
  // // width: 200px;
  // background-color: transparent;
  // border: 1px solid #64ffda;
  // color: #64ffda;
  // font-size: 16px;
  // // border-radius: 15px;
  // text-decoration: none;
  // cursor: pointer;
  // transition: background-color 0.3s ease;

  // &:hover {
  //   background-color: rgba(100, 255, 218, 0.1);
  // }
`;

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll behavior
  const controlHeaderVisibility = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", controlHeaderVisibility);
    };
  }, [lastScrollY]);

  return (
    <HeaderContainer isVisible={isVisible}>
      <MobileMenuIcon onClick={toggleMobileMenu}>
        <FaBars />
      </MobileMenuIcon>
      <Title>Ashish Sudhir Ullal</Title>
      <NavMenu>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
        <CTAButton
          href={resume}
          download="Ashish_SU_Resume.pdf"
        >
          Resume
        </CTAButton>
      </NavMenu>

      {/* Mobile Dropdown Menu */}
      <MobileDropdownMenu isOpen={isMobileMenuOpen}>
        <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
          About
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
        <CTAButton2
          href={resume}
          download="Ashish_SU_Resume.pdf"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          // style={{ width: "50px" }}
        >
          Resume
        </CTAButton2>
      </MobileDropdownMenu>
    </HeaderContainer>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-scroll';
// import { FaBars } from 'react-icons/fa';

// // Styled components
// const HeaderContainer = styled.header`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   padding: 20px;
//   // background-color: #333;
//   color: #fff;
//   transition: transform 0.3s ease-in-out;
//   transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};

//   @media (min-width: 750px) {
//     justify-content: space-between;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin: 0;

//   @media (max-width: 480px) {
//     font-size: 1.8rem;
//   }
// `;

// const NavMenu = styled.nav`
//   display: flex;
//   gap: 20px;

//   a {
//     color: #fff;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 1.2rem;
//     transition: color 0.3s;

//     &:hover {
//       color: #aaa;
//     }

//     @media (max-width: 480px) {
//       font-size: 1rem;
//     }
//   }

//   @media (max-width: 750px) {
//     display: none;
//   }
// `;

// const MobileMenuIcon = styled.div`
//   display: none;

//   @media (max-width: 750px) {
//     display: block;
//     cursor: pointer;
//     font-size: 1.5rem;
//   }
// `;

// const MobileMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 15px;
//   margin-top: 20px;
//   background-color: #333;
//   padding: 20px;
//   width: 100%;

//   a {
//     color: #fff;
//     text-decoration: none;
//     cursor: pointer;
//     font-size: 1.2rem;
//     transition: color 0.3s;

//     &:hover {
//       color: #aaa;
//     }
//   }

//   @media (min-width: 750px) {
//     display: none;
//   }
// `;

// // Header Component
// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Handle scroll behavior
//   const controlHeaderVisibility = () => {
//     if (window.scrollY > lastScrollY) {
//       // Scrolling down
//       setIsVisible(false);
//     } else {
//       // Scrolling up
//       setIsVisible(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', controlHeaderVisibility);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', controlHeaderVisibility);
//     };
//   }, [lastScrollY]);

//   return (
//     <HeaderContainer isVisible={isVisible}>
//       <Title>My Portfolio</Title>
//       <NavMenu>
//         <Link to="about" smooth={true} duration={500}>
//           About
//         </Link>
//         <Link to="experience" smooth={true} duration={500}>
//           Experience
//         </Link>
//         <Link to="contact" smooth={true} duration={500}>
//           Contact
//         </Link>
//       </NavMenu>
//       <MobileMenuIcon onClick={toggleMobileMenu}>
//         <FaBars />
//       </MobileMenuIcon>
//       {isMobileMenuOpen && (
//         <MobileMenu>
//           <Link to="about" smooth={true} duration={500} onClick={toggleMobileMenu}>
//             About
//           </Link>
//           <Link to="experience" smooth={true} duration={500} onClick={toggleMobileMenu}>
//             Experience
//           </Link>
//           <Link to="contact" smooth={true} duration={500} onClick={toggleMobileMenu}>
//             Contact
//           </Link>
//         </MobileMenu>
//       )}
//     </HeaderContainer>
//   );
// };

// export default Header;

// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-scroll';

// const HeaderContainer = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }

//   h1 {
//     font-size: 2.5rem;
//     margin: 0;

//     @media (max-width: 480px) {
//       font-size: 1.8rem;
//     }
//   }

//   nav {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;

//     a {
//       margin: 0 10px;
//       font-size: 1.2rem;

//       @media (max-width: 480px) {
//         font-size: 1rem;
//       }
//     }
//   }
// `;

// const NavMenu = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// const Header = () => (
//   <HeaderContainer>
//     <h1>My Portfolio</h1>
//     <NavMenu>
//       <Link to="about" smooth={true} duration={500}>
//         About
//       </Link>
//       <Link to="experience" smooth={true} duration={500}>
//         Experience
//       </Link>
//       <Link to="contact" smooth={true} duration={500}>
//         Contact
//       </Link>
//     </NavMenu>
//   </HeaderContainer>
// );

// export default Header;
