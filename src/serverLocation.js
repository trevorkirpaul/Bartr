const ipUnsecure = `http://165.227.111.10`;

// use this for https
const ip = 'https://trevorkirpaul.com';

// const ip = 'http://localhost';
// const locadlHost = `http://ip`;


export const URLimage = `${ipUnsecure}/avatar/`;
export const URLimageItem = `${ipUnsecure}/`;
export const APIitem = `${ip}/api/item/`;


// used in items.js actions
export const APIallItems = `${ip}/api/items`;

// used while creating new item for sale, image
export const APIitemImg = `${ip}/api/items/img`;

// used in actions login.js
export const APIlogin = `${ip}/api/login`;
  // update account and avatarUpdate
  export const APIaccount = `${ip}/api/account`;

// accounts actions
  // create
  export const accountCreateAPI = `${ip}/api/accountCreate`;
  export const getAccountInfoAfterCreate = `${ip}/api/account`;
  // createAvatar
  export const avatarCreateAPI = `${ip}/api/accountCreate/avatar`;
  
  