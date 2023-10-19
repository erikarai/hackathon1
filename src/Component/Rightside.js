import React,{useState,useEffect} from 'react'
import './Rightside.css'
// import ScrollToTopButton from './ScrollToTopButton'

export default function Rightside(){
  return (
    <>
     <div className="Rightdiv my-3" >
        <div className="flex1 col-sm-10">
          <div class="card-body border">
            <div className="container text-center fw-light ">
              <div className="row ">
                <div className="col">STARTS ON:</div>
                <div className="container text-center ">
                <div className="row">
                <div className="col">Sep 29, 2023, 12:40 PM IST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border">
            <div className="container text-center fw-light ">
              <div className="row">
                <div className="col">CLOSES ON:</div>
              </div>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">Oct 16, 2023, 12:40 PM IST</div>
              </div>
            </div>
          </div>
          <div className="registration-container border">
          <button 
          type="button"
          className="btn btn-primary"
          style={{ justifyContent: "flex" }}
          >
            REGISTER NOW
            </button>
            </div>
         </div>
      </div>
    </>
  )
}
