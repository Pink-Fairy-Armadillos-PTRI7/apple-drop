import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
import SearchBar from './SearchBar.jsx';
import SearchContainer from './SearchContainer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<SearchContainer />} />
      </Routes>
    </Router>
  )
}

export default App;
