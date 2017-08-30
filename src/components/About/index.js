import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class About extends React.Component {
  render () {
    return (
      <Element name="about" className="about">
        <div className="max-width">
        	<div className="col-sm-6 bookshelf">
            <img src={require('../../assets/img/lab-bookshelf.png')}/>
          </div>
          <div className="col-sm-6 lab-right">
            <img className="chalkboard" src={require('../../assets/img/lab-chalkboard.png')}/>
        		<h1 className="chalkboard-text">
              Let these skillsets<br/>
              be the <b>DNA</b> of<br/>
              your creation.
            </h1>
            <img className="dinos" src={require('../../assets/img/lab-dinos.png')}/>
        	</div>
        </div>
      </Element>
    );
  }
}

export default About;