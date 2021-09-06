import React from 'react';

function About() {
    return (
        <div>
        <section className="about-box section-box" id="about">
            <div className="section-header">
                <h3 className="aboutme h1-title text-center">About Me</h3>
            </div>
        </section>
        <section id="about">

            <div class="container-fluid">
        
              <div class="row fact-boxes">
                <div class="fact-box col-lg-4">
                  <i class="icon-img fas fa-code fa-6x"></i>
                  <h3 class="fact-title">Coding</h3>
                  <p>I started my coding journey in November 2020 and fell in love and decided to make a career out of it. I love how coding lets you creatively solve problems and never has a dull moment.</p>
                </div>
        
                <div class="fact-box col-lg-4">
                  <i class="icon-img fas fa-wheelchair fa-6x"></i>
                  <h3 class="fact-title">Accessiblity</h3>
                  <p>I have a Masters Degree in Vocational Rehabilitation Counseling. I am knoweledgeable about laws and regulations pertaining to Accessiblity & Disabilities including ADA, Section 504, 508, and 503 of the Rehabilitation Act.</p>
                </div>
        
                <div class="fact-box col-lg-4">
                  <i class="icon-img fas fa-university fa-6x"></i>
                  <h3 class="fact-title">Schooling</h3>
                  <p>I am currently enrolled as a student at the University of Minnesota working towards my certification in coding. My graduation date is the end of October 2021.</p>
                </div>
              </div>
        
        
            </div>
        </section>
        </div>
        
    )
}
export default About;