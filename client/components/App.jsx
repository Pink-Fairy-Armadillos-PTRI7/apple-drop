import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import Navbar from './navBar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<div className='homepage'><Navbar /> <Home /></div>} />
      </Routes>
    </Router>
  )
}

export default App;
