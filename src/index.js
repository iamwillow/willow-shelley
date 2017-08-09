import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover';
import About from './components/about';

import './assets/scss/stylesheet.scss';

const App = () => {
	return (
		<div>
			<Cover />
			<About />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);