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
// import FarmersRoute from './pages/farmersRoute';

const NoMatchPage = () => <h3>404 - Not found</h3>;

const FarmerProfilePage = ({ match, location }) => {
  const { params: { userId } } = match;
  console.log(userId);
  return (
    <FarmerProfile farmer={farmersList[userId - 1]} />
  );
}

const MusaFarmerProfile = () => <FarmerProfile farmer={farmersList[0]} />;
const KunleFarmerProfile = () => <FarmerProfile farmer={farmersList[1]} />;
const OkechukwuFarmerProfile = () => <FarmerProfile farmer={farmersList[2]} />;

const RouteNest = (props) => (
  <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />
);

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

            <Route path="/musa" component={MusaFarmerProfile} />
            <Route path="/kunle" component={KunleFarmerProfile} />
            <Route path="/okechukwu" component={OkechukwuFarmerProfile} />
            <Route path="/farmers" component={Farmers} />

            {/* <Route exact path="/farmers" component={FarmersRoute} /> */}

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
