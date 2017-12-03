import React from 'react';
import styled from 'styled-components';

const WrapperForm = styled.form`
  
`;

const Input = styled.input`
box-sizing: border-box;
  display: block;
  margin: 10px auto;
  height: 40px;
  width: 100%;
  padding: 5px;
  border: none;
  @media(max-width: 500px) {
    width: 80%;
  }
`;
const Button = styled.button`
  display: inline-block;
  border: none;
  background: #383838;
  color: #F1F5F7;
  width: 100%;
  padding: 5px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 500px) {
    width: 80%;
  }
`;
const ErrorMsg = styled.span`
  display: inline-block;
  border: 1px solid #EF233C;
  border-radius: 5px;
  background: #F9AFB8;
  color: #EF233C;
  font-family: 'Roboto', sans-serif;
  padding: 5px 10px;
`;

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const inpUser = document.getElementById('inpUser');
    const inpPass = document.getElementById('inpPass');

  
    if (inpUser.value && inpPass.value !== '') {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        username: inpUser.value,
        password: inpPass.value
      })
    } else if (inpUser.value === '') {
      this.setState(() => ({
        error: 'Please enter a valid username!'
      }))
    }  else if (inpPass.value === '') {
      this.setState(() => ({
        error: 'Please enter a valid password!'
      }))
    } else {
      this.setState(() => ({
        error: 'Please complete the form!'
      }))
    };

   
  }
  render() {
    return (
      
        <WrapperForm onSubmit={this.onSubmit}>
            {
              this.state.error &&
              <ErrorMsg>{this.state.error}</ErrorMsg>
            }
            
            <Input
              autoFocus
              type="text"
              name="username"
              id="inpUser"
              placeholder="username"
            />
         
            <Input
              type="password"
              name="password"
              id="inpPass"
              placeholder="password"
            />
         
            <Button>Log in</Button>
         
        </WrapperForm>
      
    );
  }
}