import React from 'react';
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import SideBar from './SideBar';
import ProtectRoutes from '../../Router/ProtectRoutes';

function Layout() {
    return (
        <div>
            <SideBar />
            <Routes>
                {routepath.map((i, index) => {
                    if (i.private) {
                        return (
                            <Route
                                key={`routes_${index}`}
                                path={i.path}
                                // element={<i.Element />}
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
    )
}

export default Layout;
