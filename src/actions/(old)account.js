import axios from 'axios';

export const getAccount = (account) => ({
  type: 'GET_ACCOUNT',
  account
});

// fetch from server then dispatch
// TODO figure out if I'll send back password or setup hash later
export const startGetAccount = (username) => {

  // return (dispatch) => {
  //   const {
  //     firstName = '',
  //     lastName = '',
  //     age = '',
  //     location = '',
  //     email = '',
  //     username = ''
  //   } = accountInfo;
  // }
  // const account = { firstName, lastName, age, location, email, username};

  const urlAPI = 'http://localhost:3001/api/account';
  const user = {
    username
  }
  axios.post(urlAPI, user)
    .then(
      (response) => {
        getAccount(response.data);
      }
    )

}