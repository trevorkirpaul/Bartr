import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import itemsReducer from '../reducers/items';
import accountsReducer from '../reducers/accounts';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      accounts: accountsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};