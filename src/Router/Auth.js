import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'

const AuthPoint = ({Component}) => {
    const navigate = useNavigate()
    // const dispatch = useDispatch();
    // dispatch(getNavigate())
    // dispatch(setLoading(false))
    useEffect(()=>{
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated){
            navigate('/layout')
        }
      }, [])

  return (
    <>
    <Component/>
    </>
  )
}

export default AuthPoint