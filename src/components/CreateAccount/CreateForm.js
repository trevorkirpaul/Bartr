import React from 'react';
import styled from 'styled-components';
import CreateAvatar from './CreateAvatar';


const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;

`;
const InputWrapper = styled.div`
  background: #C7DBBC;
  border: 1px solid #91A089;
  margin: 10px;
  padding: 10px;
`;
const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 5px;
  margin: 5px auto;
  @media(min-width: 500px) {
    width: 50%;
  }
`;
const ErrorMsg = styled.span`
  display: block;  
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid #EF233C;
  background: #F9AFB8;
  color: #EF233C;

`;
const ButtonSubmitWrapper = styled.div`
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;
const ButtonSubmit = styled.button`
  display: inline-block;
  border: none;
  background: #383838;
  color: #F1F5F7;
  padding: 10px;
  width: 85%;
  
`;

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName ? this.props.firstName : '',
      lastName: this.props.lastName ? this.props.lastName : '',
      age: this.props.age ? this.props.age : '',
      location: this.props.location ? this.props.location : '',
      email: this.props.email ? this.props.email : '',
      username: this.props.username ? this.props.username : '',
      password: '',
      error: '',
      avatar: ''
    }
  }
  onChangeFirstName = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({
      firstName
    }));
  }
  onChangeLastName = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({
      lastName
    }));
  }
  onChangeAge = (e) => {
    const age = e.target.value;
    this.setState(() => ({
      age
    }));
  }
  onChangeLocation = (e) => {
    const location = e.target.value;
    this.setState(()=> ({
      location
    }));
  }
  onChangeEmail = (e) => {
    const email = e.target.value;
    this.setState(()=> ({
      email
    }));
  }
  onChangeUsername = (e) => {
    const username = e.target.value;
    this.setState(()=> ({
      username
    }));
  }
  onChangePassword = (e) => {
    const password = e.target.value;
    this.setState(()=> ({
      password
    }));
  }
  onChangeAvatar = e => {
    const avatar = e.target.files[0];
    this.setState(() => ({
      avatar
    }));
    // console.log(avatar);
    // use filereader to preview image held in state/file input
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('avatarPreview').src = e.target.result;
    };

    reader.readAsDataURL(avatar);
  }
  onSubmit = (e) => {
    e.preventDefault();   

    const inpFirstName = document.getElementById('inpFirstName');
    const inpLastName = document.getElementById('inpLastName');
    const inpAge = document.getElementById('inpAge');
    const inpLocation = document.getElementById('inpLocation');
    const inpEmail = document.getElementById('inpEmail');
    const inpUsername = document.getElementById('inpUsername');
    const inpPass = document.getElementById('inpPass');
    const inpConfirmPass = document.getElementById('inpConfirmPass');

    let formComplete = false;
    let formPasswordMatch = false;

    // check if fields are filled in
    (
      inpFirstName.value &&
      inpLastName.value &&
      inpAge.value &&
      inpLocation.value &&
      inpEmail.value &&
      inpUsername.value &&
      inpPass.value    
    ) !== '' && (formComplete = true);

    // check if password field matches confirm pass field
    ((inpPass.value === inpConfirmPass.value) && (inpConfirmPass.value !== '')) && (formPasswordMatch = true);
    
    if ((formComplete === true) && (formPasswordMatch === true)) {
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        location: this.state.location,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }, this.state.avatar);
     this.setState(() => ({
      error: ''
     }));
      
    } else {
      if (formComplete === false) {
        this.setState(() => ({
          error: '** Please complete all fields!'
        }))
      } else if (formPasswordMatch === false) {
        this.setState(() => ({
          error: '** Your passwords do not match!'
        }))
      };
    };   

  }
  render() {
    return (
      <Wrapper>
        { 
          this.state.error && <ErrorMsg>{this.state.error}</ErrorMsg>
        }
        <form onSubmit={this.onSubmit}>
          
            <InputWrapper>
              <Input
                autoFocus
                type="text"
                placeholder="first name"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
                id="inpFirstName"
              />
            
              <Input           
                type="text"
                placeholder="last name"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
                id="inpLastName"
              />
           
           
              <Input            
                type="text"
                placeholder="age"
                value={this.state.age}
                onChange={this.onChangeAge}
                id="inpAge"
              />
    
              <Input            
                type="text"
                placeholder="location"
                value={this.state.location}
                onChange={this.onChangeLocation}
                id="inpLocation"
              />
         
              <Input            
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                id="inpEmail"
              />
     
              <Input            
                type="text"
                placeholder="enter a username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                id="inpUsername"
              />
       
              <Input            
                type="password"
                placeholder="enter password"
                value={this.state.password}
                onChange={this.onChangePassword}
                id="inpPass"
              />
              <Input            
                type="password"
                placeholder="confirm password"
                id="inpConfirmPass"
              />
            </InputWrapper>
        
          {
            this.props.avatarForm && <CreateAvatar onChangeAvatar={this.onChangeAvatar}/>
          }
          
          { 
            this.state.error && <ErrorMsg>{this.state.error}</ErrorMsg>
          }

          
         
            <ButtonSubmitWrapper>
              <ButtonSubmit>{this.props.username ? 'Update Profile':'Create Profile'}</ButtonSubmit>
            </ButtonSubmitWrapper>
         
        </form>
      </Wrapper>
    );
  }
}