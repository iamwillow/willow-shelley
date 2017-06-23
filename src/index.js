import React from 'react';
import ReactDOM from 'react-dom'; // <-- just import render directly
// import { render } from 'react-dom';
import Welcome from './components/welcome';

import './assets/scss/stylesheet.scss';

function App() { // <-- Start using ES6 (see below)
	return (
		<div>
			<Welcome name="Willow" />
		</div>
	)
}

/*
    const App = () => {
        return (
            <div />
        );
    };
*/

/*
 * Comments
 * Overall good start, however consider implementing the following:
 *
 * 1. ESLint (ask me about this)
 * 2. Install webpack-dev-server, you'll thank me
*/

ReactDOM.render(
	<App />,
	document.getElementById('root')
);