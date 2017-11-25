const accountReducerDefaultState = {};

export default (state = accountReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_ACCOUNT':
      return [
        action.account
      ]
    default:
      return state;
  }
}