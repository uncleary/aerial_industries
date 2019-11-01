/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './styles/main.scss';

import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import Home from './pages/home';
import Farmers from './pages/farmers';
import LandingPage from './pages/landingPage';
import Investment from './pages/investment';
import FarmerProfile from './pages/farmerProfile';
import farmersList from './assets/data/farmersList';

const NoMatchPage = () => <h3>404 - Not found</h3>;

const FarmerProfilePage = ({ match }) => {
  const { params: { userId } } = match;
  return (
    <FarmerProfile farmer={farmersList[userId - 1]} />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/welcome" component={LandingPage} />
            <Route exact path="/farmers" component={Farmers} />
            <Route path="/farmers/:userId" component={FarmerProfilePage} />
            <Route path="/investment" component={Investment} />
            <Route component={NoMatchPage} />
          </Switch>
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default hot(App);
