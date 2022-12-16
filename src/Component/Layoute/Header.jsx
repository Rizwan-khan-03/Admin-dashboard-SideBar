
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
import SideBar from './SideBar';
import ProtectRoutes from '../../Router/ProtectRoutes';
import { Link, NavLink } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Card from 'react-bootstrap/Card';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const handlelogOut = (event) => {
    localStorage.setItem("isAuthenticated", "false");
    navigate('/')
    console.log("click");
};
  return (
    <div>
      <Row >
        <Col>
          <Navbar expand="lg" variant="light" bg="light">
            <Container fluid>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form> */}
                <Button variant="outline-success"  onClick={handlelogOut}>Logout</Button>
            </Container>
          </Navbar>
        </Col>
      </Row>

    </div>
  )
}

export default Header