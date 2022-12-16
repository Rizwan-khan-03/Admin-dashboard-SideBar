
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
// import { getNavigate } from '../../../Store/Action';
import { useSelector, useDispatch } from 'react-redux'


const PrivateRoute = ({ Component }) => {

  const navigate = useNavigate()
//   const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

//   dispatch(getNavigate())

  useEffect(() => {
      if (!isAuthenticated) {
        navigate('/')
    }

  }, [])

  return (
    <>
    { isAuthenticated &&<Component  />}
        </>
  )
}

export default PrivateRoute



