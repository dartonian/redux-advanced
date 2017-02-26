import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contacts from './Contacts';

import contactsService from './services/Contacts.service';

const ContactsCtrl = connect(
    state => ({
        name : state.contactsReducer.name,
        message : state.contactsReducer.message
    }),
    dispatch => bindActionCreators({
        nameUpdate: contactsService.nameUpdate,
        messageUpdate: contactsService.messageUpdate,
        requestSend: contactsService.requestSend
    }, dispatch)
)(Contacts);

export default ContactsCtrl;