import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import About from './components/About/About';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Main from './components/Main/index';
import Footer from './components/footer/footer';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';





function App() {
  return (
      <Router>
      <div>
         <Header />
         <Switch>
            <Route path="/Home" component= {Home} />
            <Route path="/About" component= {About} />
            <Route path="/Projects" component= {Projects} />
            <Route path="/Resume" component= {Resume} />
            <Route path="/Contactme" component= {Contact} />
            <Route path ="/" exact component= {Main} />
            <Route path ="/react-portfolio" component= {Main} />
         </Switch>
         <Footer />
      </div>
      </Router>
  );
}

const Home = () => (
  <div>
    <Main />
  </div>
)

export default App;