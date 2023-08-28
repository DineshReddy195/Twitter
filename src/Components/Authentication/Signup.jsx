import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Context from "../Context/Context";

function Signup() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (
      input.name === "" ||
      (input.name === null && input.email === "") ||
      (input.email === null && input.password === "") ||
      input.password === null
    ) {
      alert("Please enter all inputs");
    } else {
      e.preventDefault();
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/signin");
    }
  };
  return (
    <div className="container register-div">
      <div className="container all-divs">
      <div class="card w-25">
  <img class="card-img-top w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Sign up</h5>
    <div class="card-text">
    <form className="form" onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              className="name form-control"
              placeholder="Enter Your name"
              value={input.name}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              className="mail form-control"
              placeholder="Enter Your Mail id"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              className="password form-control"
              placeholder="Enter Password"
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
            />
            <br />
            <br />
            <button className="register btn btn-outline-info">Signup</button>
            <br /><br/>
            <span className="span">
              Already have an account? <Link to="/signin" className="registration text-dark text-decoration-none">Login</Link>
            </span>
          </form>
    </div>
  </div>
</div>
        
      </div>
    </div>
  );
}

export default Signup;
