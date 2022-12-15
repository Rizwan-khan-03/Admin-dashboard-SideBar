import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate()
   const isAuthenticated = localStorage.getItem("isAuthenticated");
  let token = localStorage.getItem('jwtToken')
  // useEffect(() => {
  //   if (!token) navigate('/')

  // }, [])
  // return (
  //   <>
  //   {token && <Component />}

  //   </>
  // )
  return token ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;



