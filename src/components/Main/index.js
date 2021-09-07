import React from "react";
// import Header from '../Header';
import Flower from '../../images/evie.jpg';




function Main() {
  return (
<div id="/">
      <div className= "container row align-items-center">
        <div className="row w-50  d-inline-flex align-items-center">
          <div className="col text-center d-inline-block flex-direction-center position-relative">
            <h2 className="main-h2">Web Developer</h2>
            <h3 className="px-5">A love for designing and developing beautiful content and code.</h3>
            <a href="./About/About"> <button type="button" className="btn btn-outline-dark main-btn">Read More</button></a>
          </div>
        </div>
        <div className="col w-50 d-inline-flex right-image">
        <img alt="flower"src={Flower} className="d-inline-block align-top flower"/>
          
        </div>
      </div>
</div>

      
  );
}

 


export default Main;