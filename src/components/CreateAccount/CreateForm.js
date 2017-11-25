import React from 'react';

export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      location: '',
      email: '',
      username: '',
      password: '',
      error: ''
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
      });
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
      <div className="createFormWrapper">
        { 
          this.state.error && <div className="formError"><span>{this.state.error}</span></div>
        }
        <form onSubmit={this.onSubmit}>
          <div className="input">
            <input
              autoFocus
              type="text"
              placeholder="first name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              id="inpFirstName"
            />
          </div>
          <div className="input">
            <input           
              type="text"
              placeholder="last name"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              id="inpLastName"
            />
          </div>
          <div className="input">
            <input            
              type="text"
              placeholder="age"
              value={this.state.age}
              onChange={this.onChangeAge}
              id="inpAge"
            />
          </div>
          <div className="input">
            <input            
              type="text"
              placeholder="location"
              value={this.state.location}
              onChange={this.onChangeLocation}
              id="inpLocation"
            />
          </div>
          <div className="input">
            <input            
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              id="inpEmail"
            />
          </div>
          <div className="input">
            <input            
              type="text"
              placeholder="enter a username"
              value={this.state.username}
              onChange={this.onChangeUsername}
              id="inpUsername"
            />
          </div>
          <div className="input">
            <input            
              type="password"
              placeholder="enter password"
              value={this.state.password}
              onChange={this.onChangePassword}
              id="inpPass"
            />
          </div>
          <div className="input">
            <input            
              type="password"
              placeholder="confirm password"
              id="inpConfirmPass"
            />
          </div>

          
          <div className="formButtonsDiv">
            <button>Create Account!</button>
          </div>
        </form>
      </div>
    );
  }
}