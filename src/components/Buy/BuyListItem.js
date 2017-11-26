import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title, description, price, _id, createdBy }) => (
  <div className="BuyListItem">
    <div className="titleWrapper">
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
    <div className="createdByWrapper">
      <span>sold by {createdBy}</span>
    </div>
    <div className="desWrapper">
      <p>Description: {description}</p>
    </div>

    <div className="actionWrapper">
      <Link to={`/buy/item/${_id}`}>
        <span>View more...</span>
      </Link>
    </div>
    
  </div>
);