import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='page-foot' id='contact'>
        <div className="btm-bar">
          <div className="footer-container">
            <p className="company-outro">Thanks for visiting!</p>
            <p id="email">wjin0352@gmail.com</p>
              <div className="foot">
                <li>
                  <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/wonyong">Linkedin</a>
                </li>
                <li id="github">
                  <a className="github" target="_blank" href="https://github.com/wjin0352/">GitHub</a>
                </li>
              </div>
          </div>
          <p><a href="#top" id="top">Home</a></p>
        </div>

      </footer>
    );
  }
};

export default Footer;
