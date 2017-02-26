import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import contactsReducer from './app/containers/Contacts/Contacts.reducer';

const rootReducer = combineReducers({
  contactsReducer,
  routing: routerReducer
});

export default rootReducer;