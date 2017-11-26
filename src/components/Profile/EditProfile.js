import React from 'react';
import {connect} from 'react-redux';
import CreateForm from '../CreateAccount/CreateForm';
import {startUpdateAccount} from '../../actions/accounts';


export class EditProfile extends React.Component {
  onSubmit = (profile) => {
    const idFromState = this.props.profile._id;
    this.props.startUpdateAccount({...profile, "_id": idFromState});
    this.props.history.push("/profile");
    
    console.log({...profile, "_id": idFromState});
  }
  
  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <CreateForm onSubmit={this.onSubmit} {...this.props.profile}/>
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    profile: state.login
  }
}
const mapDispatchToProps = (dispatch) => ({
  startUpdateAccount: profile => dispatch(startUpdateAccount(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);