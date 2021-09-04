import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import Header from './components/NavBar/Header';
// import Main from './components/NavBar/Main/index';
// import About from './components/NavBar/About/About';
// import Projects from './components/NavBar/Projects/Projects';
import Footer from './components/footer/footer';
import Header from './components/Header';
// import Contact from './components/NavBar/Contact/Contact';


function App() {
  return (
      <div className="App">
          <div className="wrapper">
            <Header />
            {/* <Main />
            <About />
            <Projects /> */}
            <Footer />
          </div>
      </div>
  );
}





export default App;
