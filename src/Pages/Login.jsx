import React , { useState }from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form ,setForm] =useState({
    email:'',
    password:''
  })
  function onchangeHandeler(e) {
    e.preventDefault();
    let nam = e.target.name;
    let val = e.target.value;
    var new_form = form;
    new_form[nam] = val;
    setForm({...new_form});
  }
  const onSubmitHandler =()=>{
if(form){
  localStorage.setItem('jwtToken',"4e4b953b952d986cf06043aa0d1a06aee4bbf039")
  console.log('form',form);
  navigate(`/layout`)
}
  

  }
  return (

    <Container>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <div><Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               type="email"
                placeholder="Enter email" 
                name="email"
                value={form.email}
                onChange={(e) => onchangeHandeler(e)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password"
              name="password"
                value={form.password}
                onChange={(e) => onchangeHandeler(e)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form></div>
        </Col>

      </Row>
    </Container>
  )
}

export default Login