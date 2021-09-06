import React from 'react';
import Resumepdf from './LaurenNorgardResume.pdf';


function Resume() {
    return(
        <div>
            <div className="text-center">
                <h1 className="h1-title pb-3">Resume</h1>
                <a href = {Resumepdf}><i class="fas fa-download"></i>Download Pdf</a>
            </div>
            <div className= "container d-flex flex-row justify-content-around align-items-center w-75 mt-5 mb-5">
                <div className="flex-column w-50 d-inline-flex align-content-center align-items-center align-self-start">
                    {/* <div className="col text-center d-inline-block flex-direction-center position-relative"></div> */}
                        <h2 className="h2-title">Front-end Proficiencies</h2>
                            <ul className="ul">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>JQuery</li>
                                <li>Responsive Design</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                        </ul>
                    </div>
                    
                    <div className="flex-column w-50 d-inline-flex align-items-center">
                        {/* <div className="col w-50 d-inline-flex"></div> */}
                            <h2 className="h2-title">Back-end Proficiencies</h2>
                                    <ul className="ul">
                                            <li>APIs</li>
                                            <li>Node</li>
                                            <li>Express</li>
                                            <li>MySQL, Sequalize</li>
                                            <li>MongoDb, Mongoose</li>
                                            <li>REST</li>
                                        </ul> 
                    </div>  
               </div>
        </div>
    )
}
export default Resume;
