'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

/*-----------------------------------*/

//thunkMiddleware

import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

/*-----------------------------------*/

//import App

import Html from './index.html'
import Style from './less/styles.less';

const store = createStore(reducer, applyMiddleware(thunk));


render(
	<Provider store = {store}>
         <App />
    </Provider>, document.getElementById('container')
);