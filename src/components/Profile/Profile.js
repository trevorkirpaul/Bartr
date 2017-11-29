import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {startRecieveAll} from '../../actions/items';


export class Profile extends React.Component {
  componentDidMount(){
    this.props.startRecieveAll();
  }
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
const mapDispatchToProps = dispatch => ({
  startRecieveAll: () => dispatch(startRecieveAll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);