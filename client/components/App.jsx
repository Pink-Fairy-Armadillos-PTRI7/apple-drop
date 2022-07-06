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
        <Route path="/sign-up" element={/*<ExampleComponent />*/ <p></p>} />
        <Route path="/sign-in" element={/*<ExampleComponent />*/ <p></p>} />
        {/* <Route exact path="/" element={<p>Hello, World!</p>} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
