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
              Let these skillsets <br className="hide-900"/>
              be the <b>DNA</b> of <br className="hide-900"/>
              your creation.
            </h1>
            <img 
              className="dinos"
              src={require('../../assets/img/lab-dinos.png')}
              alt="dinosaurs"/>
        	</div>
          <div className="bookshelf">
            <center>
              <img 
                className="bookshelf-mobile" 
                src={require('../../assets/img/lab-bookshelf.png')}
                alt="skills"/>
              <br style={clearBoth}/>
            </center>
          </div>
          <br style={clearBoth}/>
        </div>
      </div>
    );
  }
}

export default About;