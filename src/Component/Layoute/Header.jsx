
import { Route, Routes } from "react-router-dom";
import Notfound from '../../Pages/Notfound';
import { routepath } from '../../Router/RouteList';
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

function Header(props) {
  const navigate = useNavigate()
  const handlelogOut = (event) => {
    localStorage.removeItem('isAuthenticated');
    navigate('/')
    console.log("click");
};
  return (
    <div>
      <Row >
        <Col>
          <Navbar expand="lg" style={{
          background:
            'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
            paddingLeft:'12px'
        }} >
            <Container fluid>
              <Navbar.Brand href="#"> <button id="openNav" 
               onClick={props.calback} class="w3-button w3-teal w3-xlarge"
               style={{
                background:
                  'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                  paddingLeft:'12px', paddingRight:'12px'
              }}>&#9776;</button></Navbar.Brand>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form> */}
                <Button variant="outline-success"  onClick={handlelogOut}
                style={{
                  background:
                    'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220 ,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                    marginRight: '18px'
                }}
                >Logout</Button>
            </Container>
          </Navbar>
        </Col>
      </Row>

    </div>
  )
}

export default Header