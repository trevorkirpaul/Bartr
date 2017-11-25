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
  const urlAPI = 'http://localhost:3001/api/accounts';

  return(dispatch) => {
    const {
      firstName = '',
      lastName = '',
      age = '',
      location = '',
      email = '',
      username = '',
      password = '' 
    } = accountData;

    const account = { firstName, lastName, age, location, email, username, password }

    axios.post(urlAPI, account)
      .then(
        (response) => {
          dispatch(createAccount({
            _id: response.data.id,
            ...account
          }))
        }
      )
      .catch(err => console.err);
  }
}

//  I reazlied  I don't want to send the enitre accounts collection client side
// accounts reducers, actions and the redux store state have been removed