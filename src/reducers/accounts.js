const accountsReducerDefaultState = [];

export default ( state = accountsReducerDefaultState, action ) => {
  switch (action.type) {
    case 'RECIEVE_ALL_ACCOUNTS':
      return [
        ...action.data
      ];
    case 'CREATE_ACCOUNT':
      return [
        ...state,
        action.account
      ];
    case 'UPDATE_ACCOUNT':
      return [
        action.account
      ]
    default:
      return state;
  }
};

//  I reazlied  I don't want to send the enitre accounts collection client side
// accounts reducers, actions and the redux store state have been removed