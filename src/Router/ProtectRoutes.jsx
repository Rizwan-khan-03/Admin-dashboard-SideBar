import { Navigate } from "react-router-dom";
// import { getToken } from "../App/Services/Service";
import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const ProtectRoutes = ({Component}) => {
    const navigate = useNavigate()
    useEffect(()=>{
        let token = (localStorage.getItem("jwtToken"))
          if (token){
            navigate('/laout')
          }
          else{
            navigate('/')
          }
      }, [])

  return (
    <>
    <Component/>
    </>
  )
}

export default ProtectRoutes
;