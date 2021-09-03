import React from "react";
import Header from '../Header';
import Flower from '../../../images/EvieFlower.jpg'




function Main() {
  return (
<div id="/">
      <Header />
      {/* <div className= "vh-100"> */}
      <div className= "container row align-items-center">
        <div className="row w-50 h-100 d-inline-flex align-items-center">
          <div className="col text-center d-inline-block flex-direction-center position-relative">
            <h2>Web Developer</h2>
            <h3 className="px-5">This is going to my intro sentence Interested in hiring me?</h3>
            <button type="button" class="btn btn-outline-dark">Read More</button>
          </div>
        </div>
        <div className="col w-50 h-100 d-inline-flex right-image">
        <img alt=""src={Flower} className="d-inline-block align-top"/>
          
        </div>
      </div>
</div>

      
  );
}

 


export default Main;