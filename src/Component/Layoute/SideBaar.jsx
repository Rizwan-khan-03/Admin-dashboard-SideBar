// import React, { useState } from 'react';
// import './sidebar.css'
// import { Link, NavLink } from "react-router-dom";
// function Sidebar() {
//   const [isVisible, setIsVisible] = useState(true)
//   return (
//     <>
//       {/* <main class="d-flex flex-nowrap"> */}
//       <div class="flex-shrink-0 p-3 bg-light" style={{ width: "280px"}}>
//         <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
//           <svg class="bi pe-none me-2" width="30" height="24"><use href="#bootstrap" /></svg>
//           <span class="fs-5 fw-semibold">Collapsible</span>
//         </a>
//         <ul class="list-unstyled ps-0">
//           <li class="mb-1">
//             <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
//               Home
//             </button>
//             <div class="collapse show" id="home-collapse">
//               <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                 <li><NavLink className="link-dark d-inline-flex text-decoration-none rounded" to="link1">
//                   link1
//                 </NavLink></li>
//                 <li><NavLink className="link-dark d-inline-flex text-decoration-none rounded" to="link2">
//                   link2
//                 </NavLink></li>
//                 <li><NavLink className="link-dark d-inline-flex text-decoration-none rounded" to="link3">
//                   link3
//                 </NavLink></li>
//               </ul>
//             </div>
//           </li>
//           <li class="mb-1">
//             <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
//               Dashboard
//             </button>
//             <div class="collapse" id="dashboard-collapse">
//               <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Weekly</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Monthly</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Annually</a></li>
//               </ul>
//             </div>
//           </li>
//           <li class="mb-1">
//             <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
//               Orders
//             </button>
//             <div class="collapse" id="orders-collapse">
//               <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">New</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
//               </ul>
//             </div>
//           </li>
//           <li class="border-top my-3"></li>
//           <li class="mb-1">
//             <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
//               Account
//             </button>
//             <div class="collapse" id="account-collapse">
//               <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
//                 <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
//               </ul>
//             </div>
//           </li>
//         </ul>
//       </div>
//       {/* </main> */}

//     </>
//   )
// }

// export default Sidebar

//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import Header from "./Header";
import { Route, Routes ,NavLink} from "react-router-dom";
import "./sidebar.css";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import ProtectRoutes from '../../Router/ProtectRoutes';
const SideBaar = () => {
  const { collapseSidebar } = useProSidebar();
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <div style={{ display: 'flex', height: '100%', minHeight: '95vh', minWidth: '95vw' }}>
          <Sidebar transitionDuration={1000}
            rootStyles={{
              background:
                'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
            }}>
            <Menu>
              <Menu>
                <MenuItem  icon={<FaList />} routerLink={<NavLink to="link1"/>}> link1</MenuItem>
                <MenuItem  icon={<BiCog />} routerLink={<NavLink to="link2" />}> link2</MenuItem>
                <MenuItem icon={<FaList /> }routerLink={<NavLink to="link3" />}> link3</MenuItem>
              </Menu>
            </Menu>
          </Sidebar>
          <main style={{ padding: 5 ,width:'95% ',overflowX:'none',overflowY:'none'}}>
            <div>

              <Header calback={() => collapseSidebar()} />
              <Routes>
                {routepath.map((i, index) => {
                  if (i.private) {
                    return (
                      <Route
                        key={`routes_${index}`}
                        path={i.path}

                        element={<ProtectRoutes Component={i.Element} />}
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
          </main>
        </div>
      </div>
    </>
  );
};

export default SideBaar;
