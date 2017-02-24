import React, { Component, PropTypes } from 'react';

export default class App extends Component {
   componentWillMount() {
      this.props.tryAutoFill();
   }
   render() {
      return (
         <div>
            <input type = "text"
                   value = {this.props.login}
                   onChange = {this.props.loginUpdate} />
            <input type = "password" 
                   value = {this.props.password}
                   onChange = {this.props.passwordUpdate} />

            <button onClick = {this.props.submit}>
               Submit
            </button>
            
         </div>
      );   
   }
}