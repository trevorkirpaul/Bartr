import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import axios from 'axios';
import {setUser} from '../../actions/login';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit = (loginData) => {
    // console.log(loginData);
    axios.post('http://localhost:3001/api/login', loginData)
      .then(
        (response) => {
          
          // check response from server then either login or render error elements

          if (response.data.username === loginData.username) {
            this.props.setUser(response.data);
            this.setState(() => ({
              error: ''
            }));
            this.props.history.push('/');
          } else if (response.data === 'no user found') {
            this.setState(() => ({
              error: `No users were found matching ${loginData.username}`
            }));
          } else if (response.data === 'incorrect password') {
            this.setState(() => ({
              error: 'Incorrect password'
            }));
          }

           
        }
      )
      .catch(err => console.err);
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (account) => dispatch(setUser(account))
  };
}

export default connect(undefined, mapDispatchToProps)(Login);