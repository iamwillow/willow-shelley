import React from 'react';
//import Scroll from 'react-scroll';

//var Element = Scroll.Element;
var clearBoth = { clear: 'both' };

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <div className="min-width">
          <div className="lab-right">
            <img 
              className="chalkboard" 
              src={require('../../assets/img/lab-chalkboard.png')}
              alt="chalkboard"/>
        		<h1 className="chalkboard-text">
              These skillsets will <br className="hide-900"/>
              be the <b>DNA</b> of <br className="hide-900"/>
              your creation.
            </h1>
            <img 
              className="dinos"
              src={require('../../assets/img/lab-dinos.png')}
              alt="dinosaurs"/>
        	</div>
          <div className="bookshelf hide-900">
            <center>
              <img 
                className="bookshelf-mobile" 
                src={require('../../assets/img/lab-bookshelf.png')}
                alt="skills"/>
              <br style={clearBoth}/>
            </center>
          </div>
          <div className="show-900">
            <p className="skills">Html, &nbsp; Css, &nbsp; Sass,</p>
            <p className="skills">JavaScript (ES6),</p>
            <p className="skills">jQuery, &nbsp; React JS,</p>
            <p className="skills">Unix, &nbsp; Npm, &nbsp; Git</p>
          </div>
          <br style={clearBoth}/>
        </div>
      </div>
    );
  }
}

export default About;