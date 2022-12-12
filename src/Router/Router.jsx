import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import ProtectRoutes from './ProtectRoutes'
import Layout from "../Component/Layoute/Layout";
import Login from "../Pages/Login";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
        </Route>
        <Route path='/layout'>
          <Route index path='*' element={<ProtectRoutes Component={Layout}/>} />       
        </Route>
      </Routes>
    </div>
  );
}
