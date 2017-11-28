import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';



export class Profile extends React.Component {
  render() {
    return (
    <div>
      <ProfileInfo {...this.props.profile}/>
      
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.login
  }
}

export default connect(mapStateToProps)(Profile);