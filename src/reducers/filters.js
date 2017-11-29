// filters reducer for items

const filtersReducerDefaultState = {
  text: '',
  tag: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_TAG_FILTER':
      return {
        ...state,
        tag: action.text
      }
    default:
      return state;
  }
}