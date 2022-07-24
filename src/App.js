import React from 'react';
import './App.css';
import LanguageMenu from './components/LanguageMenu';
import Content from './components/Content';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  

  return (
    <div className="App">
      <Router>
      <LanguageMenu />
      <Content />
      </Router>
    </div>
  );
}

export default App;
