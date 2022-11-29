import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import Login from '../Pages/Login';

const PrivateRoute = ({ children }) => {
  useEffect(() => {
    let token = localStorage.getItem('jwtTken')
    if (!token) {
      return <Login />;
    } else return children;
  }, [])
};

export default PrivateRoute;

