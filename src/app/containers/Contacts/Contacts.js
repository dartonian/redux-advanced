import React, {Component, PropTypes} from 'react';

export default class Contacts extends Component {
	static propTypes = {
		
	};

	render() {

		const {
			name,
			message,
			nameUpdate,
			messageUpdate,
			requestSend
		} = this.props;

		console.log(`name: ${name}`);

        return (
			<div className="section contacts">
				<div className="section__contents">
					<h1 className="text text_title-h2 text_center">Контакты</h1>

					<form onSubmit={requestSend}>

						<input type="text"
							   value={name}
							   onChange={nameUpdate} />

						<input type="text"
							   value={message}
							   onChange={messageUpdate} />

						<input type="submit"/>
					</form>

				</div>
			</div>
		);
	}
}
