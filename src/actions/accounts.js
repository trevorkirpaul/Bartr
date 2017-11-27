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

export const createAccount = (account) => ({
  type: 'CREATE_ACCOUNT',
  account
});


export const startCreateAccount = (accountData = {}) => {
  const urlAPI = 'http://localhost:3001/api/accountCreate';
  const createAccount = axios.post(urlAPI, accountData);
  return (dispatch) => {
    createAccount.then(({data}) => {
      dispatch({
        type: 'LOG_IN',
        data
      });
    });
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