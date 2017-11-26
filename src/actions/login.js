import axios from 'axios';

export const setUser = account => ({
  type: 'LOG_IN',
  account
});

export const setLogOut = (l) => ({
  type: 'LOG_OUT'
});

export const accountLogin = (loginData) => {
  const httpLogin = axios.post('http://localhost:3001/api/login', loginData);
  return(dispatch) => {
    httpLogin.then(({data})=> {
      dispatch({
        type: "LOG_IN",
        data
      })
    })
  }
 
}