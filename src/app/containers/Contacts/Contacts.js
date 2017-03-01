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
			requestSend,
			waiting,
			posts,
			getPosts
		} = this.props;

		console.log(posts);

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
					{
						posts && (
							<ul>
								{posts.map((post, i) =>
									<li key={i}>{post.title}</li>
						    	)}
							</ul>
						)
					}
					<br />
					<div>
						<button onClick={getPosts}>Загрузить</button>
					</div>

				</div>
			</div>
		);
	}
}
