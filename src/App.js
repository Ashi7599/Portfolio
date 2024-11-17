import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Expeirence';
import Contact from './components/Contact';
import styled from 'styled-components';

function App() {

  const AppContainer = styled.div`
  background-color: #0a192f;
  color: #ccd6f6;
  font-family: 'Arial', sans-serif;
`;

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Hero />
      <About /> 
      <Experience />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
