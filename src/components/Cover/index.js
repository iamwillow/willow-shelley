import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class Cover extends React.Component {
  render () {
    return (
      <Element name="cover" className="cover">
        <div className="max-width">
          <div className="cover-title">
            <h1>Don't let your website</h1>
            <h1>go extinct.</h1>
          </div>
        </div>
      </Element>
    );
  }
}

export default Cover;