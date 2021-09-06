import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Main from './components/Main/index';
import Footer from './components/footer/footer';
import Header from './components/Header';



function App() {
  return (
      <div className="App">
          <div className="wrapper">
            <Header />
            <Main />
            <Footer />
          </div>
      </div>
  );
}





export default App;
