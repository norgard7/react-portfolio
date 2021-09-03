import React from "react";
import Header from '../Header'
;




function Main() {
  return (
<div className="row" id="/">
      <Header />
      <div className="w-100">
        <div className="col w-50 d-inline-flex">
          <div className="text-center d-inline-block col justify-content-center">
            <h2>Web Developer</h2>
            <h3>Interested in hiring me?</h3>
            <button type="button" class="btn btn-outline-dark">Read More</button>
          </div>
        </div>
        <div className="col w-50 d-inline-flex bg-success">
          <h1>This will be blank</h1>
          {/* <img></img> */}
        </div>
      </div>
</div>

      
  );
}

 


export default Main;