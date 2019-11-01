/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import '../styles/config.scss';
import '../styles/timeline.css';

import {
  Container, Row, Col, Button,
} from 'reactstrap';
import Timeline from '../components/timeline';
import LineGraph from '../components/lineGraph';
import PieChart from '../components/pieChart';
import FarmerDetailsTable from '../components/farmerDetailsTable';

const StyledRow = styled(Row)`
  margin: 5rem 0rem;
`;

const ClickToInvestCard = () => (
  <Row style={{ marginBottom: '5rem' }}>
    <Col
      md={{ size: 8, offset: 2 }}
      style={{
        textAlign: 'left',
        backgroundColor: '#e9ecef',
        margin: 'auto',
        padding: '2rem',
        borderRadius: '1rem',
      }}>
      <h2 style={{ fontWeight: 'bold' }}>Click to Invest!</h2>
      <p>Click here for further technical details</p>
      <Button>Invest</Button>
    </Col>
  </Row>
);

const FarmerProfile = (farmerParent) => {
  const thisId = farmerParent.farmer.id;

  // const img1Path = require('' + farmerParent.farmer.imgLink);
  const img2Path = require('../assets/img/img2farmer' + thisId + '.jpg');
  const img3Path = require('../assets/img/img3farmer' + thisId + '.jpg');
  
  return (
    <Container style={{ paddingTop: '5rem' }}>
      <StyledRow>
        <Col md={{ size: 2, offset: 1 }}>
          <img
            src={farmerParent.farmer.imgLink}
            alt="Farmer Profile"
            style={{ maxWidth: '100%' }} />
        </Col>
        <Col md="auto">
          <h3 style={{ fontWeight: 'bold', fontSize: '2rem' }}>{farmerParent.farmer.farmerName + '\'s Farm' }</h3>
          <h4 style={{ fontColor: '#666' }}>
            {'in '
              + farmerParent.farmer.location.city
              + ' ('
              + farmerParent.farmer.location.coordinates
              + ' )'}
          </h4>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col md="6">
          <img
            src={img2Path}
            alt="iPollen8"
            style={{
              maxWidth: '90%',
              margin: 'auto',
              display: 'block' 
            }} />
        </Col>
        <Col md="6">
          <h4 style={{ color: '#495057' }}>{'Crop Type: ' + farmerParent.farmer.farmingStage}</h4>
          <h4 style={{ color: '#868e96' }}>{'Current Stage: ' + farmerParent.farmer.cropType}</h4>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h2>{farmerParent.farmer.details.section1.title}</h2>
            <h2 style={{ fontSize: '4rem', color: 'green' }}>{farmerParent.farmer.details.section1.percent}</h2>
            <p style={{ color: '#868e96' }}>{farmerParent.farmer.details.section1.desc}</p>
          </div>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <h2>Farm Information</h2>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col md="6">
          <img
            src={img3Path}
            alt="iPollen8"
            style={{
              maxWidth: '90%',
              margin: 'auto',
              display: 'block',
            }} />
        </Col>
        <Col md="6">
          <h2
            style={{
              fontStyle: 'italic',
              fontSize: '3rem',
              color: 'red',
              paddingBottom: '1rem',
            }}>
            {farmerParent.farmer.details.section2.bigTitle}
          </h2>
          <div>
            {farmerParent.farmer.details.section2.desc.map((item, index) => (
              <p key={index}>
                <strong>{item.key}</strong>
                { ': ' + item.value}
              </p>
            ))}
          </div>
          <h4>Funding Needs</h4>
          <div>
            {farmerParent.farmer.details.section2.fundingNeeds.map(
              (item, index) => (
                <p key={index}>{item.key + ': ' + item.value}</p>
              ),
            )}
          </div>
          <p>Farm Location</p>
          <p>{farmerParent.farmer.coordinates}</p>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <h2>Funding Details</h2>
          <Timeline timelineData={farmerParent.farmer.details.fundingDetails} />
        </Col>
      </StyledRow>
      <ClickToInvestCard />
      <StyledRow>
        <Col md="6" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Soil Geology</h2>
          <PieChart />
        </Col>
        <Col md="6">
          <FarmerDetailsTable
            farmerName={farmerParent.farmer.farmerName}
            coord={farmerParent.farmer.location.coordinates}
            details={farmerParent.farmer.details} />
          <h4>Summary</h4>
          <p>{farmerParent.farmer.details.summary}</p>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col md='auto'>
          <h2>Precipitation</h2>
          <div style={{ margin: 'auto' }}><LineGraph /></div>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default FarmerProfile;
