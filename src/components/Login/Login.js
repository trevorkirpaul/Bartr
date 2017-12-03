import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { accountLogin} from '../../actions/login';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 15px auto;
  padding: 25px;
  text-align: center;
  background: #FFF1AD;
  border: 1px solid #D1C68E;
  @media(max-width: 500px) {
    width: 90%;
    margin: 15px auto;
    padding: 5px;
  }
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  font-weight: 400;
  margin: 10px;
  color: #383838;
`;
const ErrorMsg = styled.span`
  display: inline-block;
  border: 1px solid #EF233C;
  border-radius: 5px;
  background: #F9AFB8;
  color: #EF233C;
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
  &:before {
    content: '** ';
  }
`;

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
      <Wrapper>
        <Title>Log in</Title>
        <div>
          {
            this.state.error && <ErrorMsg>{this.state.error}</ErrorMsg>
          }
        </div>
        <LoginForm onSubmit={this.onSubmit} />
      </Wrapper>
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