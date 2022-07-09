import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { me } from '../lib/hooks.js';
import { useStoreActions } from 'easy-peasy';
import Spinner from './Spinner.jsx';

/**
 * A wrapper component that requires an authorized user to render
 * its inner component.
 */
const Auth = ({ children }) => {
  const setUser = useStoreActions((state) => state.setUser);
  const id = Cookies.get('id');
  const token = Cookies.get('token');

  const [displayChildren, setDisplayChildren] = useState(false);

  const location = useLocation();
  const nav = useNavigate();

  const publicRoutes = ['/'];

  const { user, isError, isLoading } = me(id);

  useEffect(() => {
    if (publicRoutes.includes(location.pathname) && (!id || !token)) {
      setDisplayChildren(true);
    }
    if (publicRoutes.includes(location.pathname)) {
      setDisplayChildren(true);
    }
    if (!token || !id) {
      setDisplayChildren(true);
    }
    if (isError && !publicRoutes.includes(location.pathname)) nav('/');
  }, []);

  useEffect(() => {
    if (user) {
      setUser(user);
      setDisplayChildren(true);
    }
  }, [user]);

  return (
    <>
      {displayChildren && children}
      {isLoading && <Spinner />}
    </>
  );
};

export default Auth;
