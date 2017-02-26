import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import contactsService from './app/containers/Contacts/services/Contacts.service';

const rootReducer = combineReducers({
  contactsReducer: contactsService.reducer,
  routing: routerReducer
});

export default rootReducer;