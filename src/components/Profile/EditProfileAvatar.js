import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CreateAvatar from '../CreateAccount/CreateAvatar';
import { startUpdateAvatar } from '../../actions/accounts';

export class EditProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: ''
    }
  }
  onChangeAvatar = (e) => {
    const avatar = e.target.files[0];
    console.log(avatar);
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('avatarPreview').src = e.target.result;
    };
    reader.readAsDataURL(avatar);
    this.setState(() => ({
      avatar
    }));
  }
  submitAvatar = () => {
    this.props.startUpdateAvatar(this.state.avatar, this.props.account);
    // console.log(this.props.account._id);
    this.props.history.push('/profile');
  }
  render() {
    return (
      <div>
        <Link to="/profile">back...</Link>
        <h1>Edit Avatar</h1>
        {/* <img
          src={props.account ? (`${urlIMGavatar}${props.account.avatarPath}`) : ''}
          alt=""
          style={{
            width: '200px',
            height:'200px'
          }}
        /> */}
        <CreateAvatar onChangeAvatar={this.onChangeAvatar}/>
        <button
          onClick={this.submitAvatar}
        >Update Avatar...</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  account: state.login
});
const mapDispatchToProps = dispatch => ({
  startUpdateAvatar: (avatar, account) => dispatch(startUpdateAvatar(avatar, account))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileAvatar);