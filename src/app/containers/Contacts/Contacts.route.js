import React, {Component, PropTypes} from 'react';
import Contacts from './Contacts.ctrl';
import { Route } from 'react-router';

const contactsRoute = () => {

    return (
        <Route path="/contacts(/)" component={Contacts} />
    )
};

export default contactsRoute;