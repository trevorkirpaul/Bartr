import axios from 'axios';

export const recieveAccounts = (data) => ({
  type: 'RECIEVE_ALL_ACCOUNTS',
  data
});

// export const startRecieveAccounts = () => {

//   const urlAPI = 'http://localhost:3001/api/accounts';

//   axios.get(urlAPI)
//     .then(res => {
//       recieveAccounts(res.data);
//     })

// }

// create account

// export const createAccount = (account) => ({
//   type: 'CREATE_ACCOUNT',
//   account
// });


export const startCreateAccount = (accountData = {}, avatar) => {
  // set up form data for avatar
  const formData = new FormData();
  formData.append('avatar', avatar);


  const urlAPI = 'http://localhost:3001/api/accountCreate';
  const avatarAPI = 'http://localhost:3001/api/accountCreate/avatar';
  // const createAccount = axios.post(urlAPI, accountData);
  const createAvatar = axios.post(avatarAPI, formData);
 
  return (dispatch) => {
    createAvatar.then(({data}) => {
      const avatarPath = data.avatarPath;
      const obj = {
        ...accountData,
        avatarPath
      };
      axios.post(urlAPI, obj).then(({data}) => {
        dispatch({
          type: 'LOG_IN',
          data
        })
      })
    })
  }
}

export const startUpdateAvatar = (avatar, account) => {
  // set up FormData for new avatar
  const formData = new FormData();
  formData.append('avatar', avatar);
  const avatarAPI = 'http://localhost:3001/api/accountCreate/avatar';
  const updateAccountAPI = 'http://localhost:3001/api/account';
  const updateAvatar = axios.post(avatarAPI, formData);
   
  return (dispatch) => {
    updateAvatar.then(({data}) => {
      axios.put(updateAccountAPI, {
        ...account,
        ...data
      }).then(({data}) => {
        dispatch({
          type: 'UPDATE_ACCOUNT',
          account: data
        })
      })
    })
  }
}

export const startUpdateAccount = (accountData = {}) => {
  const urlAPI = 'http://localhost:3001/api/account';
  const updateAccount = axios.put(urlAPI, accountData);
  return (dispatch) => {
    updateAccount.then(({data}) => {
      dispatch({
        type: 'UPDATE_ACCOUNT',
        account: data
      });
    });
  };
}

//  I reazlied  I don't want to send the enitre accounts collection client side
// accounts reducers, actions and the redux store state have been removed