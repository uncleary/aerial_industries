import React from 'react';
import PropTypes from 'prop-types';
// import AppNavBar from '../UI/navbar';

const Home = ({ title }) => (
  <div>
    {/* <AppNavBar /> */}
    {title}
  </div>
);

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
