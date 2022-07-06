import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import theme from './theme';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <Router>
      <Navbar theme={theme} />
      <Routes>
        <Route exact path='/' element={<Home theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;
