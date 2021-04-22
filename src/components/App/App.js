import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import About from '../About/About';
import Header from '../Header/Header';
import TodSpecial from '../TodSpecial/TodSpecial';
import Section from '../../pages/Section/Section'
import DataProvider from '../Context/Context';
import './App.css';

function App() {
  return (
    <DataProvider>
      <>
        <Router>
          <Header />
          <About />
          <TodSpecial />
          <Section />
          <GlobalStyle />
        </Router>
      </>  
    </DataProvider>
  );
}

export default App;
