import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*-----------------------------------*/

import App from './containers/App/App';
import Main from './containers/Main/Main';
import Contacts from './containers/Contacts/Contacts';

/*-----------------------------------*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/contacts(/)" component={Contacts} />
	</Route>
);