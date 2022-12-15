
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import SideBar from './SideBar';
import ProtectRoutes from '../../Router/ProtectRoutes';
import { Link, NavLink } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Card from 'react-bootstrap/Card';
import React from 'react'
import Header from "./Header";

function Layout() {
      return (
        <div><div class="container-fluid">

        <div class="row flex-nowrap">

             <SideBar /> 
  
            <div class="col py-3">
                         <Routes>
                     {routepath.map((i, index) => {
                         if (i.private) {
                             return (
                                 <Route
                                     key={`routes_${index}`}
                                     path={i.path}

                                     element={<ProtectRoutes Component={i.Element } />} 
                                 />
                             );
                         } else {
                             return (
                                 <Route key={`routes_${index}`} path="*" element={<Notfound />} />
                             );
                         }
                     })}
                 </Routes>
            </div>
        </div>
    </div></div>
      )
    // return (
    //     <div>
    //         <div>
    //             <div class="container-fluid">

    //                 <div class="row flex-nowrap">
    //                     <Card >
    //                         <Card.Body>
    //                             <Card.Header>  <SideBar /> Featured</Card.Header>
    //                             {/* <SideBar /> */}
    //                             <Card.Text>
    //                                 <div class="col ">
    //                                     <Routes>
    //                                         {routepath.map((i, index) => {
    //                                             if (i.private) {
    //                                                 return (
    //                                                     <Route
    //                                                         key={`routes_${index}`}
    //                                                         path={i.path}

    //                                                         element={<ProtectRoutes Component={i.Element} />}
    //                                                     />
    //                                                 );
    //                                             } else {
    //                                                 return (
    //                                                     <Route key={`routes_${index}`} path="*" element={<Notfound />} />
    //                                                 );
    //                                             }
    //                                         })}
    //                                     </Routes>
    //                                 </div>
    //                             </Card.Text>
    //                         </Card.Body>
    //                     </Card>
    //                 </div>
    //             </div>
    //         </div>


    //     </div>
    // )
}

export default Layout