import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem('jwtToken')
    if (!token) navigate('/')
    
  },[])
  return (
    <>
    <Component />
    </>
  )
};

export default PrivateRoute;

