import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import CreateForm from '../CreateAccount/CreateForm';
import {startUpdateAccount} from '../../actions/accounts';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  margin: 10px;
  font-size: 3em;
  @media(max-width: 500px) {
    font-size: 1.5em;
    font-weight: 400;
  }
`;
const TitleWrapper = styled.div`
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  margin: 10px;
  padding: 25px;
  @media(max-width: 500px) {
    padding: 5px;
    text-align: center;
  }
`;
const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  margin: 10px;
  font-size: 1.5em;
  font-weight: 300;
  @media(max-width: 500px) {
    font-size: 1em;
    
  }
`;

export class EditProfile extends React.Component {
  onSubmit = (profile) => {
    const idFromState = this.props.profile._id;
    this.props.startUpdateAccount({...profile, "_id": idFromState, "avatarPath": this.props.profile.avatarPath});
    this.props.history.push("/profile");
    
    console.log({...profile, "_id": idFromState});
  }
  
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Edit Profile</Title>
          <SubTitle>You can enter a new password or your current</SubTitle>
        </TitleWrapper>
        <CreateForm onSubmit={this.onSubmit} {...this.props.profile} avatarForm={false}/>
      </Wrapper>
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