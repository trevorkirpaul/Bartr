const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'RECIEVE_ALL':
      return [
        ...action.data
      ];
    default:
      return state;
  }
};