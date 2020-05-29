import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

const Admin = () => {
  const [isAuth, setIsAuth] = useState(true);
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  if (isAuth) {
    return (
      <div>
        <h1>This is the admin page</h1>
        <button className='primary-button' onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default ProtectedRoute(Admin);