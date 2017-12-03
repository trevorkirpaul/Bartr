import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { startCreateAccount } from '../../actions/accounts';
import CreateForm from './CreateForm';

const Wrapper = styled.div`
  @media(min-width: 900px) {
    width: 900px;
    margin: 0 auto;
  }
`;
const TitleWrapper = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px;
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  margin: 5px 0 15px 0;
  font-weight: 400;
`;
const SubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  width: 75%;
  margin: 5px auto 15px auto;
  font-size: 1em;
  font-weight: 300;
`;

export class CreateAccount extends React.Component {
  onSubmit = (account, avatar) => {
    this.props.startCreateAccount(account, avatar);
    this.props.history.push('/');
  }
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Create Account</Title>
          <SubTitle>Please complete this form to begin using bartr. Profile avatars are optional!</SubTitle>
        </TitleWrapper>
        <CreateForm onSubmit={this.onSubmit} avatarForm={true}/>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startCreateAccount: (account, avatar) => dispatch(startCreateAccount(account, avatar))
  };
}

export default connect(undefined, mapDispatchToProps)(CreateAccount);