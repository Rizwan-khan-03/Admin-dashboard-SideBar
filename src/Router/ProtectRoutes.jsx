import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  let token = localStorage.getItem('jwtToken')
  const navigate = useNavigate()
  useEffect(() => {
    // let token = localStorage.getItem('jwtToken')
    if (!token) navigate('/')

  }, [])
  return (
    <>
    {
    token &&  <Component />
    }

    </>
  )
};

export default PrivateRoute;

