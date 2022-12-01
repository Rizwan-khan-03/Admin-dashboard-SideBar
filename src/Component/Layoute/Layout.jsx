import React from 'react';
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import SideBar from './SideBar';
import ProtectRoutes from '../../Router/ProtectRoutes';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

function Layoutes() {
    return (
        <div>
            {/* <SideBar />
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
            </Routes> */}
              <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100vh', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 12px 12px' }}>
        <Breadcrumb style={{ margin: '5px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            height: '100vh',
          }}
        >
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
        </Content>
      </Layout>
    </Layout>
  </Layout>
        </div>
    )
}

export default Layoutes;
