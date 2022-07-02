import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
import SearchBar from './SearchBar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
