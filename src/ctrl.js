import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './app';
import AppModel from './model';

let m = new AppModel();

console.log(m.loginUpdate);

export const AppCtrl = connect(
    state => ({
        login : state.login,
        password : state.password
    }),
    dispatch => bindActionCreators({
        loginUpdate: m.loginUpdate,
        passwordUpdate: m.passwordUpdate,
        reset: m.reset,
        tryAutoFill: m.tryAutoFill,
        submit: m.submit
    }, dispatch)
)(App);