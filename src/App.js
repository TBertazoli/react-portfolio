import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <body>
      <header>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      </header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>            
    </body>

  );
}



export default App;
