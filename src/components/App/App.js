import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Section from '../../pages/Section/Section'
import DataProvider from '../Context/Context';
import './App.css';

function App() {
  return (
    <DataProvider>
      <>
        <Router>
          <Section />
          <GlobalStyle />
        </Router>
      </>  
    </DataProvider>
  );
}

export default App;
