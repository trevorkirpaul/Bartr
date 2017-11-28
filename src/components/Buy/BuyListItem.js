import React from 'react';
import { Link } from 'react-router-dom';

const urlIMGpub = 'http://localhost:3001/';

// let imageStyle = {

// };

export default ({ title, description, price, _id, createdBy, imagePath ='empty' }) => (
  <div className="BuyListItem">
      <div className="titleWrapper">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <div className="imageWrapper" style={{backgroundImage: `url(${urlIMGpub}${imagePath})`}}>
        {/* <img src={`${urlIMGpub}${imagePath}`} alt="none"/> */}
      </div>      
      <div className="createdByWrapper">
        <span>sold by: {createdBy}</span>
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