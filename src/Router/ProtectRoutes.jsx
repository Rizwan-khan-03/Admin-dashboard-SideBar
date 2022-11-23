import { Navigate } from "react-router-dom";
// import { getToken } from "../App/Services/Service";



const ProtectRoutes = ({ children }) => {

  const token = localStorage.getItem('jwtToken')
  console.log("token :",token);
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectRoutes;