import "./Signup.css";
import React from "react";
import axios from "axios";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ParticipantComponent from '../ParticipantDash/components/PartSidebar'
import PanelistComponent from './Panelist'



export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    role: "Participant"
  });

  const handleOnChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();
  var [response, setResponse] = useState();
  var [isloading, setIsloading] = useState(false);

  // function handleRole(event) {
  //   userdata.role = event.target.value;
  // }

  const Signup = () => {
    const url = "https://984r65i5h0.execute-api.eu-north-1.amazonaws.com/dev/hackathon/users/register";
    axios
      .post(url, credentials, { 'Content-Type' : 'application/json'})
      .then((result) => {
        const json = JSON.stringify(result);
        console.log(credentials.role);
        // const userObj = {
        //   'user': json,
        //   'role': role
        // }

        alert("User Registered!!!");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Hi, erika");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // The request was made but no response was received (e.g., network error)
          console.error(error.message);
        }
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create An Account</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to="/login">
              <span className="link-primary">Sign In</span>
            </Link>
          </div>

          {response && (
            <div className="form-group mt-3">
              <label className="alert alert-danger form-control">
                {response}
              </label>
            </div>
          )}


        <div className="form-group mt-3">
          <label>Choose your role:</label>
         <select name="role" value={credentials.role} onChange={handleOnChange}>
        <option value="Participant">Participant</option>
        <option value="Panelist">Panelist</option>
        <option value="Judge">Judge</option>
        <option value="Admin">Admin</option>
      </select>
          </div>


          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              onChange={handleOnChange}
              value={credentials.name}
              name="name"
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>

            <input
              onChange={handleOnChange}
              value={credentials.email}
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>

            <input
              onChange={handleOnChange}
              value={credentials.password}
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          

          {/* <div className="form-group mt-3">
              <label>Password</label>
              <input
               onChange={handlePassword}
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              <select class="form-select" aria-label="Default select example">
              <option selected>Select your Role</option>
              <option value="1">Participant</option>
              <option value="2">Team Member</option>
             <option value="3">Panelist</option>
             <option value="4">Judge</option>
             </select>
            </div> */}

          <div className="d-grid gap-2 mt-3">
            {isloading == false && (
              <button
                onClick={Signup}
                type="button"
                className="btn btn-primary"
              >
                Create Account
              </button>
            )}

            {isloading == true && (
              <button disabled type="button" className="btn btn-primary">
                Please Wait ...
              </button>
            )}
          </div>

          <p className="text-center mt-2">
            Forgot{" "}
            <Link to="/pass">
              <a href="#">password?</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
