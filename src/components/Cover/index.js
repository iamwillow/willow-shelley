import React from 'react';
import ReactDOM from 'react-dom';

class Cover extends React.Component {
	render () {
		return (
			<div className='cover'>
				<div className='cover-text'>
					<h1>Stand out</h1>
					<div className="shape-wrap">
			    	<div id='js-unicorn' className="unicorn"></div>
			    </div>
				</div>
			</div>
		);
	}
}

export default Cover;