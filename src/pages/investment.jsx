/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import '../styles/config.scss';
import { Container, Row, Col } from 'reactstrap';
import LineGraph from '../components/lineGraph';
import Title from '../components/title';

const WhiteSection = styled.section`
  position: relative;
  background-color: white;
  padding: 6rem 0rem;
`;

const SectionTitle = styled.h2`
  margin-top: 3rem;
  text-align: left;
  font-size: 2rem;
  font-weight: medium;
`;

const StyledRow = styled(Row)`
  margin: 3rem 0rem;
`;

const SummaryFigure = ({ desc, figure, green }) => (
  <Col xs="6" md="3">
    <p className="text-center">{desc}</p>
    <h2
      className="text-center"
      style={{
        fontWeight: '500',
        color: green !== undefined ? 'green' : 'black',
      }}>
      {figure}
    </h2>
  </Col>
);

const FundCard = ({ farmer }) => (
  <StyledRow
    style={{
      backgroundColor: '#e9ecef',
      margin: '2rem',
      padding: '2rem',
      borderRadius: '1rem',
    }}>
    <Col xs="6" md="3" style={{ textAlign: 'left' }}>
      <h2 style={{ fontWeight: 'bold' }}>{farmer.name}</h2>
      <p>{farmer.cropType}</p>
      <p>{farmer.cropSeason}</p>
    </Col>
    <Col xs="6" md="3" style={{ textAlign: 'center' }}>
      <p className="text-muted">Invested</p>
      <h3>{'₦' + farmer.invested}</h3>
    </Col>
    <Col xs="6" md="3" style={{ textAlign: 'center' }}>
      <p className="text-muted">Current Value</p>
      <h3>{'₦' + farmer.currentValue}</h3>
      <p style={{ color: 'green', fontWeight: 'bold' }}>
        {'(' + farmer.return + '%)'}
      </p>
    </Col>
    <Col xs="6" md="3" style={{ textAlign: 'center' }}>
      <p className="text-muted">End Date</p>
      <h3>{farmer.endDate}</h3>
    </Col>
  </StyledRow>
);

const farmer1 = {
  name: 'Musa Aliu',
  cropType: 'Maize',
  cropSeason: 'Pre-Harvest',
  invested: 150000,
  currentValue: 173250,
  return: 15.5,
  endDate: 'Feb 2020',
};

export default function Investment() {
  return (
    <div>
      <WhiteSection>
        <Container>
          <StyledRow>
            <Col>
              <Title>My Investments</Title>
            </Col>
          </StyledRow>
          <StyledRow>
            <SummaryFigure desc="Total Investment" figure="₦ 1,000,000" />
            <SummaryFigure desc="Current Valuation" figure="₦ 1,300,000" />
            <SummaryFigure green desc="Weighted Returns" figure="+30.0%" />
            <SummaryFigure desc="Supported Farmers" figure="5" />
          </StyledRow>
        </Container>
        <Container>
          <StyledRow>
            <Col>
              <SectionTitle>Investment Overview</SectionTitle>
              <StyledRow>
                <Col md={{ size: '6', offset: '3' }}>
                  <LineGraph />
                </Col>
              </StyledRow>
            </Col>
          </StyledRow>
        </Container>
        <Container>
          <StyledRow>
            <Col>
              <SectionTitle>Fund Details</SectionTitle>
            </Col>
          </StyledRow>
          <FundCard farmer={farmer1} />
          <FundCard farmer={farmer1} />
          <FundCard farmer={farmer1} />
        </Container>
      </WhiteSection>
    </div>
  );
}
