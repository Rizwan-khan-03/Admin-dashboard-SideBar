// import React , { useState }from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [form ,setForm] =useState({
//     email:'',
//     password:''
//   })
//   function onchangeHandeler(e) {
//     e.preventDefault();
//     let nam = e.target.name;
//     let val = e.target.value;
//     var new_form = form;
//     new_form[nam] = val;
//     setForm({...new_form});
//   }
//   const onSubmitHandler =()=>{
// if(form){
//   localStorage.setItem('jwtToken',"4e4b953b952d986cf06043aa0d1a06aee4bbf039")
//   console.log('form',form);
//   navigate(`/layout`)
// }
  

//   }
//   return (

//     <Container fluid>
//       <Row className="justify-content-md-center align-middle">
//         <Col xs={12} md={4} lg={4}>
//           <div><Form onSubmit={onSubmitHandler}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                type="email"
//                 placeholder="Enter email" 
//                 name="email"
//                 value={form.email}
//                 onChange={(e) => onchangeHandeler(e)}/>
             
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control 
//               type="password" 
//               placeholder="Password"
//               name="password"
//                 value={form.password}
//                 onChange={(e) => onchangeHandeler(e)} />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form></div>
//         </Col>

//       </Row>
//     </Container>
//   )
// }

// export default Login
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  console.log("auth", localStorage.getItem("isAuthenticated"));
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (userData.username == "admin" && userData.password == "123456") {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      navigate(`/layout`)
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };
//   const onSubmitHandler =()=>{
// if(form){
//   localStorage.setItem('jwtToken',"4e4b953b952d986cf06043aa0d1a06aee4bbf039")
//   console.log('form',form);
//   navigate(`/layout`)
// }
  

//   }
  return (
    <div className="text-center">
      <h1>Signin User</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
    </div>
  );
}

export default Signin;