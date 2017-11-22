import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import axios from 'axios';
import './App.css';
import { recieveAll } from './actions/items';

const store = configureStore();
const urlAPI = 'http://localhost:3001/api/items';

// store.dispatch(addItem({
//   title: 'Iphone X',
//   description: 'An overpriced but beautiful piece of technology! Call anyone but never drop this phone. It breaks easily',
//   price: 1100
// }));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  };
  componentDidMount() {
    axios.get(urlAPI)
      .then(res => {
        store.dispatch(recieveAll(res.data));
        
      });     
    
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

export default App;
