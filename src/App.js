import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <header>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      </header>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio></Portfolio>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>


    </div >
  );
}



export default App;
