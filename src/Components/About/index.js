import React from 'react';
//import Scroll from 'react-scroll';

//var Element = Scroll.Element;
var clearBoth = { clear: 'both' };

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="wrapper">
          <div className="lab-right">
            <img
              className="chalkboard show-1280"
              src={require('../../assets/img/lab-chalkboard.png')}
              alt="chalkboard"/>
        		<h1 className="chalkboard-text">
              Let these skillsets be <br className="show-1280"/>
              be the <b>DNA</b> of <br className="show-1280"/>
              your creation.
            </h1>
            <img
              className="dinos show-1280"
              src={require('../../assets/img/lab-dinos.png')}
              alt="dinosaurs"/>
        	</div>
          <div className="bookshelf show-1280">
            <center>
              <img
                src={require('../../assets/img/lab-bookshelf.png')}
                alt="skills"/>
              <br style={clearBoth}/>
            </center>
          </div>
          <div className="hide-840">
            <p className="skills">Html, &nbsp; Css, &nbsp; Sass,</p>
            <p className="skills">JavaScript (ES6),</p>
            <p className="skills">jQuery, &nbsp; React JS,</p>
            <p className="skills">Unix, &nbsp; Npm, &nbsp; Git</p>
          </div>
          <div className="show-840 hide-1280">
            <p className="skills">Html, &nbsp; Css, &nbsp; Sass, JavaScript (ES6),</p>
            <p className="skills">jQuery, &nbsp; React JS, Unix, &nbsp; Npm, &nbsp; Git</p>
          </div>
          <br style={clearBoth}/>
        </div>
      </div>
    );
  }
}

export default About;