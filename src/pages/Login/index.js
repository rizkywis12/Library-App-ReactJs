import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import LayoutAuth from "../../layouts/Auth";
import booksshelft from '../../assets/books.png';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkUser = (e) => {
    e.preventDefault();
    if (username === "user123") {
      if (password === "user123") {
        alert("Login Success!");
        window.location.replace("/");
      } else {
        alert("Please check your password again!");
      }
    } else {
      alert("User not found, please register first!");
    }
  };

  return (
    <LayoutAuth>
      <div className="left-side">
          </div>
            <img className="logo" src={booksshelft} alt=""/>
            <h1>Register</h1>
            <p>Welcome Back, Please Register
                 to create account</p>
                 <form>
          <FloatingLabel controlId="floatingInput" label="Username">
              <Form.Control type="text" placeholder="Username" onChange={(e) => usernameChange(e)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password"   onChange={(e) => passwordChange(e)} />
            </FloatingLabel>
            <Link to={"/home"} className="btn button-login shadow btn-lg me-2 mt-3" onClick={(e) => checkUser(e)}>
              Login
            </Link>
            <Link to={"/register"} className="btn button-register shadow btn-lg ms-1 mt-3">
              Register
            </Link>
          </form>
          <footer className="mt-5">
          <p>
            By signing up, you agree to Book's <br />
            <strong>Terms and Conditions</strong> & <strong>Privacy Policy</strong>
          </p>
        </footer>
    </LayoutAuth>
  )
}

export default Login