import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';

import './assets/scss/stylesheet.scss';

function App() {
	return (
		<div>
			<Welcome name="Willow" />
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);