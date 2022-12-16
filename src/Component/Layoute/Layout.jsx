
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
    return (
        <div>
            <Container fluid >
                <Row >
                    <Col>
                        <Navbar expand="lg" variant="light" bg="light">
                            <Container>
                                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="container-fluid">
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
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    )

}

export default Layout