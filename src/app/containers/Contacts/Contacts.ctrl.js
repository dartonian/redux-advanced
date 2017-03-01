import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Contacts from './Contacts';

import contactsService from './services/Contacts.service';

const ContactsCtrl = connect(
    state => ({
        name : state.contactsReducer.name,
        message : state.contactsReducer.message,
        waiting: state.contactsReducer.waiting,
        posts: state.contactsReducer.posts
    }),
    dispatch => bindActionCreators({
        nameUpdate: contactsService.nameUpdate,
        messageUpdate: contactsService.messageUpdate,
        requestSend: contactsService.requestSend,
        getPosts: contactsService.fetchPosts
    }, dispatch)
)(Contacts);

export default ContactsCtrl;