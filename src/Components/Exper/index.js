import React from 'react';
var clearBoth = { clear: 'both' };

const Exper = () => {
  return (
    <div className="exper">
      <div className="wrapper">
        <center>
          <div className="exper-box">
            <h1 className="willow">Willow Shelley</h1>
          </div>
          <div className="exper-box">
            <h2 className="exper-title-main">UI/UX Engineer with 5 years professional experience.</h2>
          </div>
        </center>
        <br/><br/>
        <div className="col-sm-6 history">
          <div className="exper-box">
            <h3 className="exper-title">UI/UX Engineer</h3>
            <p className="exper-company">
              RAKUTEN
              <span className="grey-text"> 2015 - present (2yr, 8mo)</span>
            </p>
            <p className="exper-desc">
              Willow both designs and develops core functionality 
              pages for Rakuten membership team. Roles range 
              from UI design, front-end engineering, and project 
              coordination.
            </p>
          </div>
          <div className="exper-box">
            <h3 className="exper-title">Web Developer & Designer</h3>
            <p className="exper-company">
              T-MARK INTERNATIONAL
              <span className="grey-text"> 2014 - 2015 (1yr, 1mo)</span>
            </p>
            <p className="exper-desc">
              Working for a large third-party company, Willow 
              developed websites upholding a global standard. 
              She also handled small scale project management 
              and client communications.
            </p>
          </div>
          <div className="exper-box">
            <h3 className="exper-title">Web Developer</h3>
            <p className="exper-company">
              FREELANCE
              <span className="grey-text"> 2012 - 2013 (1yr, 4mo)</span>
            </p>
            <p className="exper-desc last">
              As a freelance web developer, Willow was in charge 
              of all aspects of website creation including design, 
              development, and optimization.
            </p>
          </div>
        </div>
        <br style={clearBoth}/>
      </div>
      <br style={clearBoth}/>
    </div>
  );
}

export default Exper;