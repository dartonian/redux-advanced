import React, {Component, PropTypes} from 'react';
import {Footer,Header} from '../../shared/components';

export default class App extends Component {
	static propTypes = {
		
	};

	render() {
    
		return (
			<div>

				<Header />

				{this.props.children}

				<Footer />
			</div>
		);
	}
}
