const loginReducerDefaultState = {};

export default ( state = loginReducerDefaultState, action ) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.account
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};