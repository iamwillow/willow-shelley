import React from 'react';
import ReactDOM from 'react-dom';

class Cover extends React.Component {
  render () {
    return (
      <div className='cover'>
        <nav className='nav-bar'>
          <a className="first" href="#">Top</a> |
          <a href="#">About</a> |
          <a className="last" href="#">Experience</a>
        </nav>
        <div className='max-width'>
          <div className='cover-title'>
            <h1>Don't let your website</h1>
            <h1>go extinct.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;