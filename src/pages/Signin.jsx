import React,{useState,useEffect} from 'react'
import { signin, authenticate, isAuthenticated } from "../helper/authHelper";
import { Navigate,Link } from "react-router-dom";
import "./signin.css"
import Header from '../components/Header';



const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
      });
    
      const { email, password, error, loading, didRedirect } = values;
      const { user } = isAuthenticated();
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            console.log(data)
            if (data.error) {
              setValues({ ...values, error: data.error, loading: false });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });
            }
          })
          .catch(console.log("signin request failed"));
      };
    
      const performRedirect = () => {
        //TODO: do a redirect here
        if (didRedirect) {
          if (user && user.role === 1) {
            return <Navigate to="/"/>;
          } else {
            return <Navigate to="/"/>;
          }
        }
        if (isAuthenticated()) {
          return <Navigate to="/" />;
        }
      };
    
      const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };
  return (
    <div>
    <Header/>
    <div>
        {/* <Header/> */}
        {loadingMessage()}
        {errorMessage()}
        

        <div className="Auth-form-container">
        
            <form className="Auth-form">
                <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                {loadingMessage()}
                {errorMessage()}
                <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" >
                    <Link to="/register">SignUp</Link>
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    onChange={handleChange("email")}
                    value={email}
                    className="form-control mt-1"
                    placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    onChange={handleChange("password")}
                    value={password}
                    className="form-control mt-1"
                    placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button onClick={onSubmit} type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                
                </div>
            </form>
        </div>

      {performRedirect()}
    </div>
    </div>
  )
}

export default Signin
