/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import '../styles/config.scss';
import '../styles/timeline.css';

import { Container, Row, Col } from 'reactstrap';
import Timeline from '../components/timeline';

const StyledRow = styled(Row)`
  margin: 5rem 0rem;
`;

const FarmerProfile = (farmerParent) => {
  const thisId = farmerParent.farmer.id;

  // const img1Path = require('' + farmerParent.farmer.imgLink);
  const img2Path = require('./../static/img/img2farmer' + thisId + '.jpg');
  const img3Path = require('./../static/img/img3farmer' + thisId + '.jpg');
  
  return (
    <Container>
      <StyledRow>
        <Col md="2">
          {/* <img
            src={img1Path}
            alt="Farmer Profile"
            style={{ maxWidth: '200px' }} /> */}
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
            style={{ maxWidth: '90%',
              margin: 'auto',
              display: 'block' }} />
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
            style={{ maxWidth: '90%',
              margin: 'auto',
              display: 'block' }} />
        </Col>
        <Col md="6">
          <h2 style={{ fontStyle: 'italic', fontSize: '3rem', color: 'red', paddingBottom: '1rem' }}>{farmerParent.farmer.details.section2.bigTitle}</h2>
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
    </Container>
  );
};

export default FarmerProfile;
