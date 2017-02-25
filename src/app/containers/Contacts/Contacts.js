import React, {Component, PropTypes} from 'react';

export default class Contacts extends Component {
	static propTypes = {
		
	};

	render() {
		console.log(this.props);
    
		return (
			<div>
				<h1>Hello world contacts!</h1>	
			</div>
		);
	}
}
