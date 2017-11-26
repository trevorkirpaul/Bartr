const loginReducerDefaultState = {};

export default ( state = loginReducerDefaultState, action ) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.data;
    case 'UPDATE_ACCOUNT':
      return action.account;
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};