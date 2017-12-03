import axios from 'axios';
import { APIlogin, APIaccount } from '../serverLocation';

export const setUser = account => ({
  type: 'LOG_IN',
  account
});

export const setLogOut = (l) => ({
  type: 'LOG_OUT'
});

export const accountLogin = (loginData) => {
  const httpLogin = axios.post(APIlogin, loginData);
  return(dispatch) => {
    httpLogin.then(({data})=> {
      dispatch({
        type: "LOG_IN",
        data
      })
    })
  }
}

export const startUpdateAccount = (accountData = {}) => {
  // const urlAPI = 'http://localhost:3001/api/account';
  const updateAccount = axios.put(APIaccount, accountData);
  return (dispatch) => {
    updateAccount.then(({data}) => {
      dispatch({
        type: 'UPDATE_ACCOUNT',
        account: data
      });
    });
  };
}
