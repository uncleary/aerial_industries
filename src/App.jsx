import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header/header';
// import Footer from "./components/footer";

const home = () => <Home title="Hello from React webpack" />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/" component={home} />
            {/* <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default hot(App);
