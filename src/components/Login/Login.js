import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { accountLogin} from '../../actions/login';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit = (loginData) => {
    this.props.accountLogin(loginData);    
  }
  componentWillReceiveProps(nextProps) {
    // after dispatching login info, we check what was returned from the server and sent to us as a prop from connect under login
    if (nextProps.login === 'no user found') {
      this.setState(() => ({
        error: nextProps.login
      }));
    } else if (nextProps.login === 'incorrect password') {
      this.setState(() => ({
        error: nextProps.login
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <h1>Log in:</h1>
        <div>
          {
            this.state.error && <span>{this.state.error}</span>
          }
        </div>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    accountLogin: (account) => dispatch(accountLogin(account))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);