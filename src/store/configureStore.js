import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import itemsReducer from '../reducers/items';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};