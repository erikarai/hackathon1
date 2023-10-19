import React from 'react'
import "./Reasons.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
// import {
//     MDBFooter,
//     MDBContainer,
//     MDBCol,
//     MDBRow,
//     MDBIcon,
//     MDBBtn
//   } from 'mdb-react-ui-kit';

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
    <div className="left-r">
      <img src={image1} alt=""></img>
      <img src={image2} alt=""></img>
      <img src={image3} alt=""></img>
      <img src={image4} alt=""></img>
    </div>
    <div className="right-r">
      {/* <span style={{color: 'white'}}>Not motivated yet?</span> */}
      <div>
        <span className="stroke-text"><h2>HERE ARE A FEW reasons</h2> </span>
        <span className="stroke-text"> <h2>for you to participate</h2></span>
      </div>
      <div className="details-r">
        <div>
          <span>Sense of accomplishment</span>
        </div>
        <div>
          <span>To learn new technical skills</span>
        </div>
        <div>
          <span>Get to grips with new technologies</span>
        </div>
        <div>
          <span>Get the chance to network</span>
        </div>
        <div>
          <span>To learn team-building skills</span>
        </div>
        <div>
          <span>Chance to meet experienced industry professionals</span>
        </div>
        <div>
          <span>To fetch better career opportunities</span>
        </div>
        <div>
          <span>To develop time management skills</span>
        </div>
        <div>
          <span>To grow out of your comfort zone</span>
        </div>
      </div>
    </div>
  </div>
);
};

export default Reasons
