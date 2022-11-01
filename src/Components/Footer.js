import React from "react";

function Footer() {
  return (
    <footer>
      <img className="logo" src="assets/images/logo.png" alt="logo" />
      <hr />
      <main className="container">
        <div className="row">
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Industries</a>
              </li>
              <li>
                <a href="#">References</a>
              </li>
              <li>
                <a href="#">Partnerships</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">imprint</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div className="social">
        <div className="copyrightText">
          <p>© 2021 Chat app</p>
        </div>
        <div className="icons">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="lastIcon" href="#">
            <i className="fa-brands fa-xing"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
