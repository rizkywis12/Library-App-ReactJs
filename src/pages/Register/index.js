import React from "react";
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import LayoutAuth from "../../layouts/Auth";
import booksshelft from '../../assets/books.png';
const Register = () => {

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
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Full Name">
              <Form.Control type="text" placeholder="Full Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email Address">
              <Form.Control type="email" placeholder="Email Address" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password"  />
            </FloatingLabel>
            <Link to={"/"} className="btn button-login shadow btn-lg me-2 mt-3">
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

export default Register