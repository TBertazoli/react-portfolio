import React from 'react';
import Nav from './components/Nav';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <header><Nav></Nav></header>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>          
    </body>    
    
  );
}



export default App;
