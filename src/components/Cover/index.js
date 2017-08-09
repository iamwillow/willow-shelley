import React from 'react';
import ReactDOM from 'react-dom';

class Cover extends React.Component {
  render () {
    return (
      <div className='cover'>
        <div className='nav-bar'>
          <div className='max-width'>
            <ul>
              <li className='first'><a href="#">Top</a></li>
              <li>|</li>
              <li><a href="#">About</a></li>
              <li>|</li>
              <li className='last'><a href="#">Experience</a></li>
            </ul>
          </div>
        </div>
        <div className='max-width'>
          <h1>Content</h1>
        </div>
      </div>
    );
  }
}

export default Cover;