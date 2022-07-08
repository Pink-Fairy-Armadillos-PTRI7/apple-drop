import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { me } from '../lib/hooks.js';
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';

/**
 * A wrapper component that requires an authorized user to render
 * its inner component.
 */
const Auth = ({ children }) => {
  const user = useStoreState((state) => state.user);
  const setUser = useStoreActions((state) => state.setUser);
  const id = Cookies.get('id');
  const token = Cookies.get('token');

  const [error, setError] = useState(null);
  const [displayChildren, setDisplayChildren] = useState(false);
  const nav = useNavigate();

  const location = useLocation();

  const publicRoutes = { '/': true, '/test': true };

  useEffect(() => {
    if (publicRoutes[location.pathname]) setDisplayChildren(true);
    else {
      if (!token || !id) {
        setDisplayChildren(true);
        nav('/');
      }
      if (!user) {
        const { user: data, isError, isLoading } = me(id);
        if (user) {
          setUser(data);
        }

        if (isError) nav('/');
      }
    }
  }, []);
  useEffect(() => {
    if (error) {
      nav('/');
      setError(null);
    }

    if (user) {
      setDisplayChildren(true);
    }
  }, [error, user]);

  return displayChildren && children; // Render the inner component
};

export default Auth;
