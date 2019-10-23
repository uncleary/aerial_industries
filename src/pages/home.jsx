import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../styles/config.scss';
import { Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
} from 'reactstrap';

const MasterHead = styled.section`
  position: relative;
  background-color: #e9ecef;
  padding: 6rem 4rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: black;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Subtitle = styled.h2`
  color: #868e96;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const CoCard = ({ slogan, companyName, linkTo }) => (
  <Card body>
    <div
      style={{
        minHeight: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
      <CardTitle
        style={{
          textAlign: 'center',
          paddingTop: '2rem',
          textTransform: 'uppercase',
          fontSize: '2rem',
          width: '90%',
          margin: 'auto',
        }}>
        {slogan}
      </CardTitle>
    </div>

    {/* <CardText>Nutrients</CardText> */}
    <Link to={linkTo || '/'} className="btn btn-outline-primary">
      Visit Company
    </Link>
    <h4 style={{ textAlign: 'right', paddingTop: '1rem' }}>{companyName}</h4>
  </Card>
);

CoCard.propTypes = {
  slogan: PropTypes.string,
  companyName: PropTypes.string,
  linkTo: PropTypes.string,
};

export default function Home() {
  const co1 = {
    slogan: 'Micro Nutrients',
    companyName: 'iPollen8',
    linkTo: '/welcome',
  };
  const co2 = { slogan: 'Precision Mechanization', companyName: 'cygnus' };
  const co3 = { slogan: 'Energy Resource', companyName: 'H.A.W.K' };

  return (
    <MasterHead>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Title>Aerial Industries Pte. Ltd.</Title>
            <Subtitle>
              Next generation open-farm precision technologies for a smarter,
              healthier and more sustainable arable farming ecosystem
            </Subtitle>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <CoCard slogan={co1.slogan} companyName={co1.companyName} linkTo={co1.linkTo} />
          </Col>
          <Col md="4">
            <CoCard slogan={co2.slogan} companyName={co2.companyName} />
          </Col>
          <Col md="4">
            <CoCard slogan={co3.slogan} companyName={co3.companyName} />
          </Col>
        </Row>
      </Container>
    </MasterHead>
  );
}
