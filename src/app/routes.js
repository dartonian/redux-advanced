import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*-----------------------------------*/

import App from './containers/App/App';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts.ctrl';

/*-----------------------------------*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/contacts(/)" component={Contacts} />
		<Route path="/about(/)" component={About} />
	</Route>
);