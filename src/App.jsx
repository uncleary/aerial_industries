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
import farmersList from './static/data/farmersList';

const FirstFarmerProfile = () => <FarmerProfile farmer={farmersList[0]} />;

const NoMatchPage = () => <h3>404 - Not found</h3>;

const FarmerProfilePage = ({match, location}) => {
  const { params: { userId } } = match;
  console.log(userId)
  return (
    <FarmerProfile farmer={farmersList[userId - 1]} />
  );
}

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
            <Route path="/farmers" component={Farmers} />
            <Route path="/investment" component={Investment} />
            <Route path="/farmer/:userId" component={FarmerProfilePage} />
            <Route component={NoMatchPage} />
          </Switch>
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default hot(App);
