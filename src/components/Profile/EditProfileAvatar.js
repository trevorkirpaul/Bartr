import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CreateAvatar from '../CreateAccount/CreateAvatar';
import { startUpdateAvatar } from '../../actions/accounts';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
const TitlePanel = styled.div`
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  margin: 10px;
  padding: 25px;
  
`;
const Title = styled.h1`
  color: #383838;
  font-family: 'Roboto', sans-serif;
  font-size: 3em;
  margin: 0 0 10px 0;
`;
const SubTitle = styled.h2`
   color: #383838;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 400;
`;
const MidPanel = styled.div`
  background: #C7DBBC;
  border: 1px solid #91A089;
  margin: 10px;
  padding: 25px;
`;
const CreateWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto 10px auto;
`;
const ActionWrapper = styled.div`
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  padding: 25px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
`;
const StyledLink= styled(Link)`
  display: inline-block;
  text-decoration: none;
  background: #383838;
  border: none;
  color: white;
  padding: 10px;
  
`;
const Button = styled.button`
  display: inline-block;
  background: #383838;
  border: none;
  color: white;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export class EditProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: ''
    }
  }
  onChangeAvatar = (e) => {
    const avatar = e.target.files[0];
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
    
    this.props.history.push('/profile');
  }
  render() {
    return (
      <Wrapper>
       
        <TitlePanel>
          <Title>Edit Avatar</Title>
          <SubTitle>Select a new avatar for your profile!</SubTitle>
        </TitlePanel>
        
        <MidPanel>
          <CreateWrapper>
            <CreateAvatar onChangeAvatar={this.onChangeAvatar}/>
          </CreateWrapper>
        </MidPanel>
        
        <ActionWrapper>
          <StyledLink to="/profile">back...</StyledLink>
          <Button
            onClick={this.submitAvatar}
          >
            Update Avatar
          </Button>
        </ActionWrapper>
      </Wrapper>
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