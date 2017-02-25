import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	static propTypes = {
		
	};

	render() {
		console.log(this.props);
    
		return (
			<div>
				<Link to="/contacts/" className="link">link</Link>
				<h1>Hello world app!</h1>
				{this.props.children}
			</div>
		);
	}
}
