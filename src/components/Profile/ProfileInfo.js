import React from 'react';
import {Link} from 'react-router-dom';

export default ({ username, email, age, location, firstName, lastName, _id, password }, props) => (
  <div className="profileWrapper">
    <div>
      <h1>Dashboard</h1>      
    </div>

    <div className="greetPane">
      <h2>{username}</h2>      
      <h3>Welcome {firstName} {lastName}!</h3>      
    </div>
    <div className="profileSettingsPane">
     <h2>Profile</h2>
     <Link to="/editAccount">edit...</Link>
     <p><span className="fieldLabel">username:</span> {username}</p>
     <p><span className="fieldLabel">age:</span> {age}</p>
     <p><span className="fieldLabel">email:</span> {email}</p>
     <p><span className="fieldLabel">location:</span> {location}</p>

    </div>
  </div>
);