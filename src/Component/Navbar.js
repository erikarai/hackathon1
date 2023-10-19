import navbar from "./Navbar.css";
import logo from "./LogoHackathon.png";
import React, { useState, useEffect, createContext } from "react";
import MainBody from './MainBody'
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


const ThemeContext = createContext(null);
function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Incedo</a>
          <form className="d-flex" role="search">
            <button type="button" className="btn btn-light mx-2">
              <Link to='/login'>Login</Link>
            </button>
            {/* <button type="button" class="btn btn-light">Sign up</button> */}
            <div className="dropdown">
              <button
                className="btn btn-light mx-3"
                type="button"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <Link to='/signup'>Sign up</Link> 
              </button>
            </div>
          </form>
        </div>
      </nav>
      <img src={logo} alt="Logo" />
      <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item " align="left">
          <div class="participated-calendar-div less-margin-3 dark">
            <span class="event-team-size small medium-margin-left caps">
              Allowed team size:
              <strong>1 - 4</strong>
            </span>
          </div>
        </li>
      </ul>
      {/* <li className="list-group-item fw-light fs-6" align="left">STARTS ON:
  <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

    </div>
  </li>
  
  <li className="list-group-item">A third item</li>
  <li className="list-group-item"></li>
   */}
 
      <div className="team-5 my-3">
        <div className="flex1 col-sm-10">
      
          <div class="card-body">
            <div className="container text-center fw-light ">
              <div className="row ">
                <div className="col">STARTS ON:</div>
                <div className="col">IDEATION:</div>
                <div className="col">
                  ENDS ON:
                </div>
                <div className="container text-center ">
                  <div className="row">
                    <div className="col">
                      <b> Sep 29, 2023, 12:40 PM IST</b>
                    </div>
                    <div className="col">
                      <b>Online</b>
                    </div>
                    <div className="col">
                      <b>Oct 16, 2023, 11:55 PM IST</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div className="container text-center fw-light ">
              <div className="row">
                <div className="col">STARTS ON:</div>
                <div className="col">DEVELOPMENT:</div>
                <div className="col">ENDS ON:</div>
              </div>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">Sep 29, 2023, 12:40 PM IST</div>
                <div className="col">Online</div>
                <div className="col">Oct 16, 2023, 11:55 PM IST</div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ justifyContent: "flex-end"}}
        >
          <Link to="/signup" style={{color: "white"}}>REGISTER NOW</Link>
        </button>
      </div>
      </div>
    <Sidebar/>
        
    </>
   
  );
}

export default Navbar;
