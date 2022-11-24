import { Navigate } from "react-router-dom";
// import { getToken } from "../App/Services/Service";
import React , { useState,useEffect }from 'react';



const ProtectRoutes = ({ children }) => {
  // useEffect(()=>{
    
  // })

  const token = localStorage.getItem('jwtToken')
  console.log("token :",token);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectRoutes;