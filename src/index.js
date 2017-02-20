'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*-----------------------------------*/

//import Root from './app/containers/Root';

/*-----------------------------------*/

import Html from './index.html'
import Style from './less/styles.less';


render(
	<Root />, document.getElementById('root')
);