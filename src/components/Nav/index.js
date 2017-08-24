import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import NavData from '../../data/nav.json';
/*
	Please note:
  It is totally unnecessary to put the nav data in a
  separate file, but I wanted the practice of using
  external JSON data within React.
*/

var Link      = Scroll.Link;
var Events    = Scroll.Events;
var scroll    = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
  return deltaTop;
};

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount() {
    scrollSpy.update();
	}

	scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
  	Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  setSelected(index) {
  	this.setState({
  		selected: index
  	})
  }

	render () {
		return (
			<nav className="nav-bar">
				{ NavData.map((item, index) =>
					<Link 
						key={index}
						to={item.to} 
						activeClass="active"
						onClick={this.setSelected({index})}
						spy={true} 
						smooth={true} 
						duration={500}>
						{item.text}
					</Link>
				)}
      </nav>
		)
	}
}

export default Nav;