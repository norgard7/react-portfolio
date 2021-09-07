import React, {useState} from 'react';
import Footer from './footer/footer';
import Header from './Header';
import Main from './Main/index';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Logo from "../images/logo.png";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// nav pages
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';

export default function DisplayPages() {
    const [currentPage, setCurrentPage] = useState ('Main');

    const renderPage = () => {
        if (currentPage === 'Main') {
          return <Main />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
            return (
                  <div>
                    <Header currentPage = {currentPage} handlePageChange = {handlePageChange} />
                    {renderPage()}
                    <Footer />

                  </div>
                    )
}

