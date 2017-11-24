const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
    case 'DELETE_ITEM':
      return state.filter((item) => item._id !== action.itemId);
      
    case 'RECIEVE_ALL':
      return [
        ...action.data
      ];
    default:
      return state;
  }
};