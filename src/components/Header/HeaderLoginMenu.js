import React from 'react';
import { connect } from 'react-redux';
import HeaderAccountMenu from './HeaderAccountMenu';

export class HeaderLoginMenu extends React.Component {
  render() {
    return (
      
        <HeaderAccountMenu accountUserName={this.props.accountUserName} accountAvatar={this.props.accountAvatar} />
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accountUserName: state.login.username,
    accountAvatar: state.login.avatarPath
  }
}

export default connect(mapStateToProps)(HeaderLoginMenu);