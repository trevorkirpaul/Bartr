// import axios from 'axios';

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