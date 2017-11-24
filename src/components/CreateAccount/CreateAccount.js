import React from 'react';
import CreateForm from './CreateForm';

export default class CreateAccount extends React.Component {
  onSubmit = (account) => {
    console.log(account);
  }
  render() {
    return (
      <div className="createAccountWrapper">
        <div className="createAccountTitle">
        <h1>Create Account</h1>
        <h2>Please complete this form to begin using bartr!</h2>
      </div>
      <CreateForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}