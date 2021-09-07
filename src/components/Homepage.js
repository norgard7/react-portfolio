import React from 'react';
import Footer from './footer/footer';
import Header from './Header';
import Main from './Main/index';

function Homepage() {
        if (Homepage === 'https://norgard7.github.io') {
            return ( 
            <div style={{height: "100%"}}>
                <Header/>
                <Main />
                <Footer />
            </div>
            )
           
        } else {
            return (
                <div>
                    <Header />
                    <Footer />
                </div>

            )
           
         
        }
    }
    

export default Homepage;