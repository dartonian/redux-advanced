import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*-----------------------------------*/

import App from './containers/App/App';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import contactsRoute from './containers/Contacts/Contacts.route';

/*-----------------------------------*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		{contactsRoute()}
		<Route path="/about(/)" component={About} />
	</Route>
);