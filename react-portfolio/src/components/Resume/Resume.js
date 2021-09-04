import React from 'react';
// import React, { Component } from 'react';
import Resumepdf from './LaurenNorgardResume.pdf';


function Resume() {
    return(
        <div>
            <div className="text-center">
                <h1>Resume</h1>
                <a href = {Resumepdf}><i class="fas fa-download"></i>Download Pdf</a>
            </div>
            <div>
                <div>
                    <h2>Frontend Proficiencies</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>CSS</li>
                        </ul>
                </div>
                <div>
                    <h2>Backend Proficiencies</h2>
                        <ul>
                            <li>node js</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
export default Resume;