import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import theme from './theme';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
import TeacherDash from './TeacherDash.jsx';
import CreateList from './CreateList.jsx'

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Navbar theme={theme} user={user} setUser={setUser} />
      <Routes>
        <Route exact path='/' element={<Home theme={theme} />} />
        <Route exact path = '/dashboard' element={<TeacherDash theme = {theme} />} />
        <Route exact path='/create-list' element={<CreateList theme={theme} />} />
        {/* <Route exact path="/test" element={<Test />} /> */}
      </Routes>
    </Router>
  );
};

/**
 * TODO
 * File upload for picture (file / url)
 */

export default App;
