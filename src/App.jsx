import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './styles/main.scss';

import MyNavbar from './components/navbar';
import MyFooter from './components/footer';
import Home from './pages/home';
import Farmer from './pages/farmer';
import LandingPage from './pages/landingPage';
import Investment from './pages/investment';

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
            <Route path="/farmer" component={Farmer} />
            <Route path="/investment" component={Investment} />
            {/* <Route path="/contact" component={Contact} />
            <Route component={Notfound} /> */}
          </Switch>
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default hot(App);
