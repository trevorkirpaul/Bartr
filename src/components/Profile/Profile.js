import React from 'react';
import { connect } from 'react-redux';


export class Profile extends React.Component {
  
  render() {
    return (
    <div>
      <h1>User Profile</h1>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login
  }
}

export default connect(mapStateToProps)(Profile);