import React from 'react';
function Footer() {
    return (
        <footer className="d-flex flex-column align-items-center" id="contactme">
        <div className="container-fluid d-flex justify-content-center">

        
          {/* <!-- linkedin --> */}
            <a href="https://www.linkedin.com/in/lauren-norgard-2458ba200/" aria-hidden="true"><span class="visually-hidden">https://www.linkedin.com/in/lauren-norgard-2458ba200/</span><i class="social-icon fab fa-linkedin"></i></a>
          {/* <!-- github --> */}
            <a href="https://github.com/norgard7" aria-hidden="true"><span class="visually-hidden">https://github.com/norgard7</span><i class="social-icon fab fa-github"></i></a>
            {/* <!-- email icon --> */}
            <a href="mailto:Lauren.c.norgard@gmail.com" aria-hidden="true"><span class="visually-hidden">https://github.com/norgard7</span><i class="social-icon fas fa-envelope"></i></a>
            {/* <!-- phone number icon --> */}
            <a href="tel: +1-651-808-3785" aria-hidden="true"><span class="visually-hidden">651-808-3785</span><i class="social-icon fas fa-phone"></i></a>   
        </div>
        <p class="footer-p">© Copyright 2021 Norgy Brew</p>
      </footer>
    )
}
export default Footer;
