import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case 'TEST':
      return Object.assign({}, state, {})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  routing: routerReducer
})

export default rootReducer