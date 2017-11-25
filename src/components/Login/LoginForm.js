import React from 'react';

export default class LoginForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    const inpUser = document.getElementById('inpUser');
    const inpPass = document.getElementById('inpPass');

    (inpUser.value && inpPass.value !== '') && (
      this.props.onSubmit({
        username: inpUser.value,
        password: inpPass.value
      })
    );

   
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              autoFocus
              type="text"
              name="username"
              id="inpUser"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="inpPass"
            />
          </div>
          <div>
            <button>Log in</button>
          </div>
        </form>
      </div>
    );
  }
}