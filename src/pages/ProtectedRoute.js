import React from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = (Component) => {
  const AuthRoute = () => {
    const isAuth = localStorage.getItem("token");
    if (isAuth === 'alonzuman7') {
      return <Component />;
    } else {
      return <Redirect to="/" />;
    }
  };

  return AuthRoute;
};
