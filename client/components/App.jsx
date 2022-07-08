import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import theme from './theme';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
import CreateList from './CreateList.jsx';
import Test from './AppTest.jsx';
import Auth from './Auth.jsx';

import { useStoreActions } from 'easy-peasy';

import { me } from '../lib/hooks.js';
import Cookies from 'js-cookie';

const App = () => {
  const setUser = useStoreActions((state) => state.setUser);
  const id = Cookies.get('id');

  const { user, isError, isLoading } = me(id);

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <Router>
      <Auth user={user}>
        <Navbar theme={theme} user={user} setUser={setUser} />
        <Routes>
          <Route exact path="/" element={<Home theme={theme} />} />
          <Route
            exact
            path="/create-list"
            element={<CreateList theme={theme} />}
          />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Auth>
    </Router>
  );
};

/**
 * TODO
 * File upload for picture (file / url)
 */

export default App;
