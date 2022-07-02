import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
