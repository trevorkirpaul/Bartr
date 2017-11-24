const accountsReducerDefaultState = [];

export default ( state = accountsReducerDefaultState, action ) => {
  switch (action.type) {
    case 'RECIEVE_ALL_ACCOUNTS':
      return [
        ...action.data
      ];
    default:
      return state;
  }
};