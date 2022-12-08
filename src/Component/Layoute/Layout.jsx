
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import SideBar from './SideBar';
import ProtectRoutes from '../../Router/ProtectRoutes';
import { Link, NavLink } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

// // import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu } from 'antd';

// const { Header, Content, Sider, Footer } = Layout;

// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `   <NavLink to="layout/link1">
//       <div className="">
//           <p>link1</p>
//       </div>
//   </NavLink>`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );

// function Layoutes() {
//   return (
//     <div>
//       {/* <SideBar />
//             <Routes>
//                 {routepath.map((i, index) => {
//                     if (i.private) {
//                         return (
//                             <Route
//                                 key={`routes_${index}`}
//                                 path={i.path}
//                                 // element={<i.Element />}
//                                 element={<ProtectRoutes Component={i.Element } />} 
//                             />
//                         );
//                     } else {
//                         return (
//                             <Route key={`routes_${index}`} path="*" element={<Notfound />} />
//                         );
//                     }
//                 })}
//             </Routes> */}
//       <Layout>
//         <Header className="header">
//           <div className="logo" />
//           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//         </Header>
//         <Layout>
//           <Sider width={200} className="site-layout-background">
//             <Menu
//               mode="inline"
//               defaultSelectedKeys={['1']}
//               defaultOpenKeys={['sub1']}
//               style={{ height: '100%', borderRight: 0 }}
//               items={items2}
//             />
//           </Sider>
//           <Layout style={{ padding: '0 12px 12px' }}>
//             <Breadcrumb style={{ margin: '5px 0' }}>
//               <Breadcrumb.Item>Home</Breadcrumb.Item>
//               <Breadcrumb.Item>List</Breadcrumb.Item>
//               <Breadcrumb.Item>App</Breadcrumb.Item>
//             </Breadcrumb>
//             <Content
//               className="site-layout-background"
//               style={{
//                 padding: 24,
//                 margin: 0,
//                 height: '100%',
//               }}
//             >
//               <Routes>
//                 {routepath.map((i, index) => {
//                   if (i.private) {
//                     return (
//                       <Route
//                         key={`routes_${index}`}
//                         path={i.path}
//                         // element={<i.Element />}
//                         element={<ProtectRoutes Component={i.Element} />}
//                       />
//                     );
//                   } else {
//                     return (
//                       <Route key={`routes_${index}`} path="*" element={<Notfound />} />
//                     );
//                   }
//                 })}
//               </Routes>
//             </Content>
//             <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//           </Layout>
//         </Layout>
//       </Layout>
//     </div>
//   )
// }

// export default Layoutes;
import React from 'react'

function Layout() {
  return (
    <div><div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
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
}

export default Layout