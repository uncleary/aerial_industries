import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Farmers from './farmers';
import FarmerProfile from './farmerProfile';
import farmersList from '../static/data/farmersList';

const MusaFarmerProfile = () => <FarmerProfile farmer={farmersList[0]} />;
const KunleFarmerProfile = () => <FarmerProfile farmer={farmersList[1]} />;
const OkechukwuFarmerProfile = () => <FarmerProfile farmer={farmersList[2]} />;

const FarmersRoute = ({ match, location }) => (
  <div>
    <div>{JSON.stringify(match)}</div>
    <Route exact path={match.path} component={Farmers} />
    <Route path={`${match.path}/one`} component={MusaFarmerProfile} />
    <Route path={`${match.path}/two`} component={KunleFarmerProfile} />
  </div>
);

export default FarmersRoute;
