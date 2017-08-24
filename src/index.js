import React    from 'react';
import ReactDOM from 'react-dom';
import Nav      from './components/nav';
import Cover    from './components/cover';
import About    from './components/about';
import Exper    from './components/exper';

import './assets/scss/stylesheet.scss';

const App = () => {
	return (
		<div>
			<Nav />
			<Cover />
			<About />
			<Exper />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);