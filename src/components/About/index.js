import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <div className='max-width'>
        	<div className="col-sm-8 dino-tube-wrapper">
        		<img className="bubble bubble-1" src="../src/assets/img/bubble-1.png"/>
	          <img className="dino-tube dino-1" src="../src/assets/img/dino-1.png"/>

	          <img className="bubble bubble-2" src="../src/assets/img/bubble-2.png"/>
	          <img className="dino-tube dino-2" src="../src/assets/img/dino-2.png"/>

	          <img className="bubble bubble-3" src="../src/assets/img/bubble-3.png"/>
	          <img className="dino-tube dino-3" src="../src/assets/img/dino-3.png"/>

	          <img className="bubble bubble-4" src="../src/assets/img/bubble-4.png"/>
	          <img className="dino-tube dino-4" src="../src/assets/img/dino-4.png"/>

	          <img className="bubble bubble-5" src="../src/assets/img/bubble-5.png"/>
	          <img className="dino-tube dino-5" src="../src/assets/img/dino-5.png"/>
	         </div>
	         <div className="col-sm-4">
        		<h2>Let my skillsets be the <b>DNA</b> of your creation.</h2>
        	</div>
        </div>
      </div>
    );
  }
}

export default About;