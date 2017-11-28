import React from 'react';
import { connect } from 'react-redux';
import { startCreateAccount } from '../../actions/accounts';
import CreateForm from './CreateForm';

export class CreateAccount extends React.Component {
  onSubmit = (account, avatar) => {
    this.props.startCreateAccount(account, avatar);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="createAccountWrapper">
        <div className="createAccountTitle">
        <h1>Create Account</h1>
        <h2>Please complete this form to begin using bartr!</h2>
      </div>
      <CreateForm onSubmit={this.onSubmit} avatarForm={true}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startCreateAccount: (account, avatar) => dispatch(startCreateAccount(account, avatar))
  };
}

export default connect(undefined, mapDispatchToProps)(CreateAccount);