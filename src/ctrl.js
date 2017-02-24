import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//var connect = ReactRedux.connect;
//var bindActionCreators = Redux.bindActionCreators;
import App from './app';
import {loginUpdate,passwordUpdate,reset,tryAutoFill,submit} from './model';

export const AppCtrl = connect(
    state => ({
        login : state.login,
        password : state.password
    }),
    dispatch => bindActionCreators({
        loginUpdate,
        passwordUpdate,
        reset,
        tryAutoFill,
        submit
    }, dispatch)
)(App);