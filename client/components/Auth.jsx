import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const nav = useNavigate();

  // Handles routing

  useEffect(() => {
    if (!token || !id) nav('/');

    if (!user) {
      const { user: data, isError, isLoading } = me(id);
      if (user) setUser(data);

      if (isError) nav('/');
    }
  }, []);

  useEffect(() => {
    if (error) {
      nav('/');
      setError(null);
    }
  }, [error]);

  return children; // Render the inner component
};

export default Auth;
