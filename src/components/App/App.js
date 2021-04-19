import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import About from '../About/About';
import Header from '../Header/Header';
import TodSpecial from '../TodSpecial/TodSpecial';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
        <About />
        <TodSpecial />
      </>  
    </Router>
  );
}

export default App;
