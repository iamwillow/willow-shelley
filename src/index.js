import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';

import './assets/scss/stylesheet.scss';

const App = () => {
	return (
		<div>
			<Cover />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);