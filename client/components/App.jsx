import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NotFound from './404.jsx';

import '../style.css';
import theme from './theme';
import Navbar from './navBar.jsx';
import Home from './Home.jsx';
import CreateList from './CreateList.jsx';
import ListContainer from './ListContainer.jsx';
import TeacherDash from './TeacherDash.jsx'
import TeacherStory from './TeacherStory.jsx'

import Auth from './Auth.jsx';
import { ErrorBoundary } from '../lib/ErrorBoundary.js';
import { useStoreActions } from 'easy-peasy';

const App = () => {
  const setUser = useStoreActions((state) => state.setUser);

  return (
    <Router>
      <ErrorBoundary>
       
        <Auth>
          <Navbar theme={theme} setUser={setUser} />
          <Routes>
          <Route exact path='/search' element={<ListContainer theme={theme} />} />
          <Route exact path='/search/:zip' element={<ListContainer theme={theme}/>} />
            <Route exact path="/" element={<Home theme={theme} />} />
            <Route
              exact
              path="/create-list"
              element={<CreateList theme={theme} />}
            />
            <Route exact path = '/dashboard' element={<TeacherDash theme = {theme} />} />
            <Route exact path = '/story' element={<TeacherStory theme = {theme}  /> }/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Auth>
      </ErrorBoundary>
    </Router>
  );
};

/**
 * TODO
 * File upload for picture (file / url)
 */

export default App;
