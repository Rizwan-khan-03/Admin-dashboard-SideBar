import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectRoutes from './ProtectRoutes'
import Layout from "../Component/Layoute/Layout";
import Login from "../Pages/Login";
import AuthPoint from "./Auth";

export default function Router() {
  const isAuth = localStorage.getItem("isAuthenticated");
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<AuthPoint Component={Login} />} />
        </Route>
        <Route path='/layout'>
          <Route index path='*' element={<ProtectRoutes Component={Layout} />} />
        </Route>
        {/* <Route path='/organisation'>
          <Route index path='*' element={<OrgProtect Component={OrganisationDash}/>} />       
        </Route> */}
      </Routes>

    </div>
  );
}
