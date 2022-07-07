import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import theme from './theme';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
<<<<<<< HEAD
import TeacherDash from './TeacherDash.jsx';
=======
import Test from './AppTest.jsx';
>>>>>>> dev

const App = () => {
  return (
    <Router>
      <Navbar theme={theme} />
      <Routes>
<<<<<<< HEAD
        <Route exact path='/' element={<Home theme={theme} />} />
        <Route exact path = '/dashboard' element={<TeacherDash theme = {theme} />} />
=======
        <Route exact path="/" element={<Home theme={theme} />} />
        <Route exact path="/test" element={<Test />} />
>>>>>>> dev
      </Routes>
    </Router>
  );
};

export default App;
