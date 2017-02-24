'use strict';

import React from 'react';
import { render } from 'react-dom';

/*--------------------------------*/

import { createStore, applyMiddleware } from 'redux';

/*--------------------------------*/

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

/*--------------------------------*/

import {AppCtrl} from './ctrl';
import AppModel from './model'

/*--------------------------------*/

import Html from './index.html';
import Style from './less/styles.less';

/*--------------------------------*/

const m = new AppModel();

const store = createStore(m.reducer, applyMiddleware(thunk));

render(
	<Provider store = {store}>
		<AppCtrl />
	</Provider>, document.getElementById('app')
);