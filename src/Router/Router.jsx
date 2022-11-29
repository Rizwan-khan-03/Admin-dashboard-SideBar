import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { routepath } from "./RouteList";
import { CheckRouter } from "./CheckRouter";
import ProtectRoutes from './ProtectRoutes'
import Layout from "../Component/Layoute/Layout";
import Login from "../Pages/Login";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectRoutes Component={Login} />}/>
        </Route>
        <Route path='/'>
          <Route index element={<ProtectRoutes Component ={Layout} />} />
        </Route>
        {/* {
          routepath?.map((i, index) => {
            {console.log(" Router + i",i);}
            if (!i.private) {
              return (
                <Route
                  key={index}
                  path={i.path}
                  element={<ProtectRoutes>{<i.Element />}</ProtectRoutes>}
                />
              );
            }
          })
        } */}
        {/* <Route path="*" element={<Layout />} /> */}
      </Routes>
    </div>
  );
}
