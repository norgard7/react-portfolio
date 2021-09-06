import React from 'react';
import planner from '../../images/planner.jpg';
import code from '../../images/code.jpg';
import weather from '../../images/weather.jpg';
import passwordGenerator from '../../images/passwordgenerator.jpg';
import stocks from '../../images/stocks.jpg';
import chessboard from '../../images/chessboard.jpg';
import hockey from '../../images/hockey.jpg';
import blog from '../../images/blog.jpg';
import '../../style.css';
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
    return (
    <div>
        <section id="mywork">
  <h3 id="my-work" className="h1-title pb-5">My Projects</h3>
  <Carousel className="project-carousel h-75">
    {/* slide one Planner*/}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={planner} alt="day planner on ipad"/> 
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Daily Planner</h2>
          <p className="work-para h1">This is a planner that can be used daily during the hours of 9-5(typical workday hours). It will let you know the current time by highlighting that red, future time is green and past is gray. You can add content to the page if you have meetings, or tasks that need get done.</p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            {/* <!-- first button opens deployed --> */}
            <a href="https://norgard7.github.io/daily-planner/" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-4" aria-hidden="true"><span class="visually-hidden">Click to open project</span>Open Project</a>
            {/* <!-- second button opens code --> */}
            <a href="https://github.com/norgard7/daily-planner" target="_blank" rel="noopener noreferrer" className="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
    {/* Slide two Coding Quiz*/}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={code} alt="code"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Coding Quiz</h2>
          <p className="work-para h1">This is a JS quiz that that asks 5 questions that displays in a random order. It is a timed quiz with a 15 second penalty for wrong answers, your quiz score is based on time remaining. </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://norgard7.github.io/javascript-coding-quiz/" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">Open Project</a>
            <a href="https://github.com/norgard7/javascript-coding-quiz" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>                  
          </div>
        </div>
      </div>
    </Carousel.Item>          
    {/* Slide three Weather app */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={weather} alt="tropical destination with fluffy clouds and sunset"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Weather Dashboard</h2>
          <p className="work-para h1">The Weather Dashboard allows you to populate any city in the united states. It will save your top 8 cities, so that you can refer back to them. It shows the  current day forecast as well as the next 5 days.</p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href=" https://norgard7.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/weather-dashboard" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
    {/* Slide four Password Generator */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={passwordGenerator} alt="skeleton key"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Password Generator</h2>
          <p className="work-para h1">Description This is a passcode generator that generates a number between 8 and 128, it will ask if you want uppercase, lowercase, numbers or symbols. This wil then print out the passcode for you to copy and paste.
          </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://norgard7.github.io/passcode-generator/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/passcode-generator" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
    {/* Slide Five Stocks */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={stocks} alt="stock market newspaper"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Stock Finder</h2>
          <p className="work-para h1">Stock Finder is a web application that enables users to search for a company's stocks. Search results will display:Company Name, Company Logo, Company Description, A linked URL to the company official webpage, Company stock summary, A selection of 3 related articles to the company's stocks linked to the original source.When the search is made, select an option from the Select Stock Company dropdown. In the Recent Searches left sidebar, the option selected will be available, so repeated searches are not necessary. If data is not available from the search, an error modal will show.
          </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://norgard7.github.io/stock-finder/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/stock-finder" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
   {/* Slide six Simon Game */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={chessboard} alt="chessboard"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Simon Game</h2>
          <p className="work-para h1">Simon is the classic 80s game that tests your memory. The game lights up and play a sound, you have to repeat the sequence correctly in order to move onto the next level.
          </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://norgard7.github.io/simon-game/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/simon-game" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
   {/* Slide seven HatTrick */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={hockey} alt="hockey player"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">The HatTrick Platform</h2>
          <p className="work-para h1">Have you always wanted to easily keep track of your hockey stats? Easily input information about yourself, update stats and instantly see how you are doing.
          </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://the-hattrick-platform.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/Project_2_Purity_Ring" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
    {/* Slide eight Tech Blog */}
    <Carousel.Item>
      <div className="border-box-image d-flex flex-row justify-content-center align-items-center flex-md-row p-3 p-md-0 h-100">
        <img className="project-image" src={blog} alt="tech blog"/>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h2 className="work-text">Tech Blog</h2>
          <p className="work-para h1">Have you always wanted to write a blog? Guess what? Now you can! Fully functional tech blog that allows you to post, delete, add comments, and see what your readers are thinking.
          </p>
          <div className="btn-box d-flex flex-row justify-content-around w-50">
            <a href="https://ln-tech-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="btn btn-outline" role="button">Open Project</a>
            <a href="https://github.com/norgard7/tech-blog" target="_blank" rel="noopener noreferrer" class="btn btn-outline px-4" role="button">See Code</a>
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</section>
</div>
);
}
export default Projects;