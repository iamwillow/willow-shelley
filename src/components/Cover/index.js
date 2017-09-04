import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class Cover extends React.Component {
  render () {
    return (
      <Element name="cover" className="cover">
        <div className="min-width">
          <h1 className="cover-title">
            Don't let your website
            <br/>
            go extinct.
          </h1>
        </div>
      </Element>
    );
  }
}

export default Cover;