import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ProfileItems from './ProfileItems';
import {URLimage} from '../../serverLocation';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 15px auto;
  

`;
const TitleWrapper = styled.div`
  text-align: center;
  @media(min-width: 500px) {
    text-align: left;
  }
`;
const Title = styled.h1`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  color: #383838;
  font-weight: 400;
  text-align: center;
  margin: 10px auto;
  @media(min-width: 500px) {
    font-size: 3em;
    margin: 15px;
    
    font-weight: 700;
  }
`;
const TopPanel = styled.div`
  background: #D8F7FA;
  border: 1px solid #9EB4B6;
  text-align: center;
  margin: 10px;

`;
const Username = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  margin: 10px;
  font-weight: 400;
`;
const AvatarWrapper = styled.div`
  padding: 0px;
  border: 1px solid #9EB4B6;
  margin: 10px auto;
  
  width: 100px;
  height: 100px;

  overflow: hidden;
`;
const Avatar = styled.img`
  height: auto;
  width: 100%;
`;

const Button = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  margin: 5px;
  margin-bottom: 15px;
  text-align: center;
  background: #383838;
  color: #F1F5F7;
  padding: 10px;
  text-decoration: none;
`;
const InfoPanel = styled.div`
  background: #FFF1AD;
  border: 1px solid #D1C68E;
  margin: 10px;
  padding: 10px;
  @media(min-width: 500px) {
    text-align: center;
  }
`;

const Detail = styled.span`
  display: block;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  color: #383838;
`;

export default ({ username, email, age, location, firstName, lastName, _id, password, avatarPath }, props) => (
  <Wrapper>
    <TitleWrapper>
      <Title>Dashboard</Title>
    </TitleWrapper>
    <TopPanel>
      <Username>
        {username}
      </Username>
      <AvatarWrapper>
        <Avatar src={avatarPath && `${URLimage}${avatarPath}`}/>
      </AvatarWrapper>
      <Button to="/editAccount/avatar">Change Avatar</Button>
    </TopPanel>
    <InfoPanel>
      <Detail>First Name: {firstName}</Detail>
      <Detail>Last Name: {lastName}</Detail>
      <Detail>Age: {age}</Detail>
      <Detail>Location: {location}</Detail>
      <Detail>E-mail: {email}</Detail>
      <Button to="/editAccount">Edit Profile</Button>
    </InfoPanel>
    <ProfileItems username={username}/>

    {/* <ProfileItems username={username} /> */}
  </Wrapper>
);