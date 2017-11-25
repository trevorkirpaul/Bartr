import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import itemsReducer from '../reducers/items';
import loginReducer from '../reducers/login';
import accountReducer from '../reducers/account';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      login: loginReducer,
      account: accountReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};