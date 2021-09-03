import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/NavBar/Header';
import Main from './components/NavBar/Main/index';
import About from './components/NavBar/About/About';
import Projects from './components/NavBar/Projects/Projects'

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            <Main />
            <About />
            <Projects />
          </div>
      </div>
  );
}
export default App;