import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var clearBoth = { clear: 'both' };

class About extends React.Component {
  render () {
    return (
      <Element name="about" className="about">
        <div className="min-width">
          <div className="lab-right">
            <img className="chalkboard" src={require('../../assets/img/lab-chalkboard.png')}/>
        		<h1 className="chalkboard-text">
              Let these skillsets <br className="hide-900"/>
              be the <b>DNA</b> of <br className="hide-900"/>
              your creation.
            </h1>
            <img className="dinos" src={require('../../assets/img/lab-dinos.png')}/>
        	</div>
          <div className="bookshelf">
            <center>
              <img className="bookshelf-mobile" src={require('../../assets/img/lab-bookshelf.png')}/>
              <br style={clearBoth}/>
            </center>
          </div>
          <br style={clearBoth}/>
        </div>
        <br style={clearBoth}/>
      </Element>
    );
  }
}

export default About;