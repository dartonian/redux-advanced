'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//var createStore = Redux.createStore;
//var applyMiddleware = Redux.applyMiddleware;
import {AppCtrl} from './ctrl';
import {reducer} from './model'

/*-----------------------------------*/

//thunkMiddleware

import thunk from 'redux-thunk';
//var thunk = ReduxThunk.default

import createLogger from 'redux-logger';

/*-----------------------------------*/

//import App

import Html from './index.html';
import Style from './less/styles.less';


const store = createStore(reducer, applyMiddleware(thunk));
//var store = createStore(reducer, applyMiddleware(thunk));


render(
	<Provider store = {store}>
		<AppCtrl />
	</Provider>, document.getElementById('app')
);


// var Provider = ReactRedux.Provider;
// ReactDOM.render((
//       <Provider store = {store}>
//          <FormAuthController/>
//       </Provider>
//    ),
//    document.getElementById('container')
// );