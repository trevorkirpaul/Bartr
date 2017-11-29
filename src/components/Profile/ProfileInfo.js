import React from 'react';
import {Link} from 'react-router-dom';
import ProfileItems from './ProfileItems';
const urlIMGavatar = 'http://localhost:3001/avatar/';

export default ({ username, email, age, location, firstName, lastName, _id, password, avatarPath }, props) => (
  <div className="profileWrapper">
    <div>
      <h1>Dashboard</h1>      
    </div>

    <div className="greetPane">
      <h2>{username}</h2>      
      <h3>Welcome {firstName} {lastName}!</h3>
      {
        avatarPath && <img
        src={`${urlIMGavatar}${avatarPath}`}
        alt=""
        style={{
            width: '200px',
            height:'200px'
          }}
      />
      }
      
      <Link to="/editAccount/avatar">upload new avatar...</Link>
    </div>
    <div className="profileSettingsPane">
     <h2>Profile</h2>
     <Link to="/editAccount">edit...</Link>
     <p><span className="fieldLabel">username:</span> {username}</p>
     <p><span className="fieldLabel">age:</span> {age}</p>
     <p><span className="fieldLabel">email:</span> {email}</p>
     <p><span className="fieldLabel">location:</span> {location}</p>

    </div>
    <ProfileItems username={username} />
  </div>
);