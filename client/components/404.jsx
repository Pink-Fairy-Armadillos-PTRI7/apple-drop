import React from 'react';
import { Navigate } from 'react-router-dom';

function Err404() {
  const shouldRedirect = true;
  return (
    <>
      <h2>About</h2>
      {shouldRedirect && <Navigate replace to="/" />}
    </>
  );
}

export default Err404;
