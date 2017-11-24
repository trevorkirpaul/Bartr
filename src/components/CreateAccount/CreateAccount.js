import React from 'react';
import { connect } from 'react-redux';
import { startCreateAccount } from '../../actions/accounts';
import CreateForm from './CreateForm';

export class CreateAccount extends React.Component {
  onSubmit = (account) => {
    this.props.startCreateAccount(account);
    this.props.history.push('/');
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

const mapDispatchToProps = (dispatch) => {
  return {
    startCreateAccount: (account) => dispatch(startCreateAccount(account))
  };
}

export default connect(undefined, mapDispatchToProps)(CreateAccount);