import React from 'react';

export default ({ title, description, price }) => (
  <div>
    <h3>{title}</h3>
    <p>{price}</p>
    <p>{description}</p>
  </div>
);