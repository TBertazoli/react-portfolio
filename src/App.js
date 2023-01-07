import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [aboutMeSelected, setAboutMeSelected] = useState(true);

  return (
    <div>
      <header>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}
        ></Nav>
      </header>
      <main>
        {aboutMeSelected && <About></About>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {contactSelected && <ContactForm></ContactForm>}
      </main>


    </div >
  );
}



export default App;
