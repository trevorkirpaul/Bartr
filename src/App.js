import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import axios from 'axios';
import './App.css';
import { recieveAll } from './actions/items';
import { recieveAccounts } from './actions/accounts';

const store = configureStore();
const urlAPI = 'http://localhost:3001/api/items';



export default class App extends Component {

  componentDidMount() {
    axios.get(urlAPI)
      .then(res => {
        store.dispatch(recieveAll(res.data));
        
      });   
    axios.get('http://localhost:3001/api/accounts')
      .then(res => {
        store.dispatch(recieveAccounts(res.data));
      })
  }
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

// const mapStateToProps = (state, props) => ({
//   accounts: state.accounts
// })

// const mapDispatchToProps = (dispatch, props) => ({
//   startRecieveAccounts: () => dispatch(startRecieveAccounts())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
