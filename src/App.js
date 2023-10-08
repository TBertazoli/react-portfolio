import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

import Resume from "./components/Resume";

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [aboutMeSelected, setAboutMeSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <header>
        <Nav
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          aboutMeSelected={aboutMeSelected}
          setAboutMeSelected={setAboutMeSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>
      </header>
      <main>
        {aboutMeSelected && <About></About>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {resumeSelected && <Resume></Resume>}
      </main>
    </div>
  );
}

export default App;
