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
    default:
      return state;
  }
};