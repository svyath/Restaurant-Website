import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <>
        <GlobalStyle />
        <Header />
      </>  
    </Router>
  );
}

export default App;
