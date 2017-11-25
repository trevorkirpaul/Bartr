import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import CreateAccount from '../components/CreateAccount/CreateAccount';
import Home from '../components/Home/Home';
import Buy from '../components/Buy/Buy';
import BuyViewMore from '../components/Buy/BuyViewMore';
import Sell from '../components/Sell/Sell';
import Login from '../components/Login/Login';
import Profile from '../components/Profile/Profile';
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/buy" component={Buy} exact={true}/>
        <Route path="/buy/item/:id" component={BuyViewMore} />
        <Route path="/sell" component={Sell} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
