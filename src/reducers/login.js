const loginReducerDefaultState = [];

export default ( state = loginReducerDefaultState, action ) => {
  switch (action.type) {
    case 'LOG_IN':
    return [
      action.username
    ]
    default:
      return state;
  }
};