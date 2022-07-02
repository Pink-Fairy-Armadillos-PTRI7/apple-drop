import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={/*<ExampleComponent />*/ <p></p>} />
        <Route path="/sign-in" element={/*<ExampleComponent />*/ <p></p>} />
        <Route exact path="/" element={<p>Hello, World!</p>} />
      </Routes>
    </Router>
  );
};

export default App;
