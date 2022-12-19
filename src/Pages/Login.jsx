
import React, { useState } from "react";
import { useDispatch } from "redux";
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

  return (
    
    <section class="vh-100" style={{ background: 'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)' }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <form onSubmit={handleSubmit}>
                  <h3 class="mb-5">Sign in</h3>
                  <div class="form-outline mb-4">
                    <input
                      type="tex" id="typeEmailX-2" class="form-control form-control-lg" placeholder="admin"
                      name="username"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password"
                      name="password"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>


                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>
                  {errorMessage.value && (
                    <p className="text-danger"> {errorMessage.value} </p>
                  )}
                  <button class="btn btn-primary btn-lg btn-block" type="submit"
                    style={{ background: 'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)', color: "black" }}>
                    Login</button>

                  <hr class="my-4" />

                  <button class="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#dd4b39" }}
                    type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                  <button class="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: "#3b5998" }}
                    type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;