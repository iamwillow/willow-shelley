import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello, {this.props.name}!</h1>
				<h2>It was {new Date().toLocaleTimeString()} when you loaded this page.</h2>
			</div>
		)
	}
}