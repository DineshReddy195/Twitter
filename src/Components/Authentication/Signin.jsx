// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Signin.css";

// function Signin() {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const loggedUser = JSON.parse(localStorage.getItem("user"));
//     if (
//       input.email === loggedUser.email &&
//       input.password === loggedUser.password
//     ) {
//       localStorage.setItem("loggedin", true);
//       navigate("/");
//     } else {
//       alert("Check Your Credentials");
//     }
//   };

//   return (
//     <div className="container main-div">
//       <div className="all">
//       <div class="card">
//   <img class="card-img-top w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg" alt="Card image cap"/>
//   <div class="card-body">
//     <div class="card-text">
//     <h1 className="display-6 heading-login text-center">Signin</h1>
//           <form onSubmit={handleLogin} className="form">
//             <input
//               value={input.email}
//               className="form-control mail mt-4 w-75"
//               onChange={(e) => {
//                 setInput({ ...input, [e.target.name]: e.target.value });
//               }}
//               type="email"
//               name="email"
//               placeholder="Enter Your Mail id"
//             />
//             <br />
//             <br />
//             <input
//               value={input.password}
//               className="form-control password w-75"
//               onChange={(e) => {
//                 setInput({ ...input, [e.target.name]: e.target.value });
//               }}
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//             />
//             <br />
//             <br />
//             <button className="login btn btn-outline-dark">SignIn</button>
//             <br /><br/>
//             <span className="span">
//               Don't have account? <Link to="/signup" className="registration text-dark text-decoration-none">Signup</Link>
//             </span>
//           </form>
//     </div>
//   </div>
// </div>
//         {/* <div style={{borderRight:'3px solid black'}}></div>
//         <div className="form-all">
//         <h1 className="display-6 heading-login">Signin</h1>
//           <form onSubmit={handleLogin} className="form">
//             <input
//               value={input.email}
//               className="form-control mail mt-4"
//               onChange={(e) => {
//                 setInput({ ...input, [e.target.name]: e.target.value });
//               }}
//               type="email"
//               name="email"
//               placeholder="Enter Your Mail id"
//             />
//             <br />
//             <br />
//             <input
//               value={input.password}
//               className="form-control password"
//               onChange={(e) => {
//                 setInput({ ...input, [e.target.name]: e.target.value });
//               }}
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//             />
//             <br />
//             <br />
//             <button className="login btn btn-outline-dark">SignIn</button>
//             <br />
//             <span className="span">
//               Don't have account? <Link to="/signup" className="registration">Signup</Link>
//             </span>
//           </form>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Signin;
