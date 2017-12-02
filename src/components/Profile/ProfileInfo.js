import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ProfileItems from './ProfileItems';
const urlIMGavatar = 'http://localhost:3001/avatar/';

const Wrapper = styled.div``;
const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  color: #383838;
  text-align: center;
`;
const GreetPanel = styled.div`
  text-align: center;
  margin-bottom: 55px;
`;
const Avatar = styled.img` 
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const ButtonLink = styled(Link)`
  padding: 3px 5px;
  text-decoration: none;
  background: #383838;
  color: #F1F5F7;
  font-family: 'Roboto', sans-serif;
`;

const SettingsPane = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #383838;
  margin: 10px;
  background: white;
  padding: 10px;
`;
const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SettingsTitle = styled.h3`
  margin: 0;
`;

export default ({ username, email, age, location, firstName, lastName, _id, password, avatarPath }, props) => (
  <Wrapper>
    <Heading>Dashboard</Heading>

    <GreetPanel>
        <Avatar
          src={avatarPath && `${urlIMGavatar}${avatarPath}`}
          alt="avatar"
        />
      <Heading>{username}</Heading>
      <ButtonLink to="/editAccount/avatar">upload new avatar</ButtonLink>
    </GreetPanel>

    <SettingsPane>
     <SettingsHeader>
       <SettingsTitle>Profile</SettingsTitle>
       <div>
         <ButtonLink to="/editAccount">edit</ButtonLink>
       </div>
     </SettingsHeader>
     <p><span className="fieldLabel">username:</span> {username}</p>
     <p><span className="fieldLabel">age:</span> {age}</p>
     <p><span className="fieldLabel">email:</span> {email}</p>
     <p><span className="fieldLabel">location:</span> {location}</p>

    </SettingsPane>
    <ProfileItems username={username} />
  </Wrapper>
);