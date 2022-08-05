import React, { useState } from "react";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import { signup } from "../helper/authHelper";


const Signup = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        error: "",
        success: false
      });
    
      const { username, email, password, error, success } = values;
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ username, email, password })
          .then(data => {
            console.log(data)
            if (data.errors) {
              setValues({ ...values, error: data.message, success: false });
            } else {
              setValues({
                ...values,
                username: "",
                email: "",
                password: "",
                error: "",
                success: true
              });
            }
          })
          .catch(console.log("Error in signup"));
      };
    

    const successMessage = () => {
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div  className="alert alert-success"  style={{ display: success ? "" : "none" }} >
                New account was created successfully. Please{" "}
                <Link to="/login">Login Here</Link>
                </div>
            </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger"  style={{ display: error ? "" : "none" }} >
                {error}
                </div>
            </div>
            </div>
        );
    };
  return (
    
    <div className="row">
        <Header/>


    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        {successMessage()}
        {errorMessage()}
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" >
            <Link to="/login">SignIn</Link>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              onChange={handleChange("username")} type="text" value={username}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              onChange={handleChange("email")}  type="email"  value={email}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={handleChange("password")}
              className="form-control mt-1"
              placeholder="Password"
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
</div>
  )
}

export default Signup
