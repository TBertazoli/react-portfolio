import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [projects] = useState([
    { name: 'Prework Study Guide' },
    { name: 'Run Budy' },
    { name: 'Horieson' },
    { name: 'Lab Notebook' }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>        
        <Portfolio
          projects={projects}
          currentProject={currentProject}
          setcurrentProject={setCurrentProject}
        ></Portfolio>
        <About></About>
        <Contact></Contact>
      </main>
    </div>




  );
}



export default App;
