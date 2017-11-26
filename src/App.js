import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './App.css';

// for styling user profile
import {accountLogin} from './actions/login';



const store = configureStore();

store.dispatch(accountLogin({username: 'trevor', password: 'password'}));


export default class App extends Component {

 
  render() {
    return (
      <div className="App">

        <Provider store={store}>
        <AppRouter />
        </Provider>
        
      </div>
    );
  }
}

