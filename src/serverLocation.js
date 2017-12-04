const ip = `http://165.227.111.10`;
// const ip = 'http://localhost';
// const locadlHost = `http://ip`;


export const URLimage = `${ip}:3001/avatar/`;
export const URLimageItem = `${ip}:3001/`;
export const APIitem = `${ip}:3001/api/item/`;


// used in items.js actions
export const APIallItems = `${ip}:3001/api/items`;

// used while creating new item for sale, image
export const APIitemImg = `${ip}:3001/api/items/img`;

// used in actions login.js
export const APIlogin = `${ip}:3001/api/login`;
  // update account and avatarUpdate
  export const APIaccount = `${ip}:3001/api/account`;

// accounts actions
  // create
  export const accountCreateAPI = `${ip}:3001/api/accountCreate`;
  export const getAccountInfoAfterCreate = `${ip}:3001/api/account`;
  // createAvatar
  export const avatarCreateAPI = `${ip}:3001/api/accountCreate/avatar`;
  
  