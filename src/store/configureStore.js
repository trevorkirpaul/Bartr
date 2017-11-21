import { createStore, combineReducers } from 'redux';
import itemsReducer from '../reducers/items';

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};