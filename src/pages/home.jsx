import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../styles/config.scss';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardTitle, Button,
} from 'reactstrap';
import Title from '../components/title';
import supporterLogosArray from '../assets/img/supporter-logo';
import mediaLogosArray from '../assets/img/media-logo';

const MasterHead = styled.section`
  position: relative;
  background-color: white;
  padding: 6rem 4rem;
`;

const Subtitle = styled.h2`
  color: #868e96;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const InvestButton = styled(Button)`
  background-color: black;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
`;

const StyledCard = styled(Card)`
  color: 'black';
  padding: 2rem;
  background-color: #75c581;
  &:hover {
    background-color: #a5baa6;
  }
  &.active {
    background-color: #a5baa6;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

const SloganBig = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
`;

const SloganSmall = styled.h3``;

const StyledCardTitle = styled(CardTitle)`
  text-align: center;
  padding-top: 2rem;
  width: 90%;
  margin: auto;
  ${StyledCard}:hover & {
    display: ${(props) => (props.hideonhover ? 'none' : 'block')};
  }
`;

const HoverCard = styled.div`
  display: none;
  ${StyledCard}:hover & {
    display: ${(props) => (props.hideonhover ? 'block' : 'none')};
  }
`;

const LogoImage = styled.img`
  max-height: 100px;  
  max-width: ${props => 100 / props.numElements}%;
  padding: 1rem;
  margin: auto;
  display: inline;
`;

const CoCard = ({
  sloganBig, sloganSmall, companyName, linkTo, info,
}) => (
  <StyledCard body>
    <Link to={linkTo || ''}>
      <div
        style={{
          minHeight: '250px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <HoverCard hideonhover={info || undefined}>
          <h3 style={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}>
            {companyName}
          </h3>
          <p style={{ color: 'white' }}>{info}</p>
          <InvestButton>Invest</InvestButton>
        </HoverCard>
        <StyledCardTitle hideonhover={info || undefined}>
          <SloganBig>{sloganBig}</SloganBig>
          <SloganSmall>{sloganSmall}</SloganSmall>
          <h4
            style={{
              textAlign: 'right',
              paddingTop: '3rem',
              marginBottom: '-3rem',
              color: 'white',
            }}>
            {companyName}
          </h4>
        </StyledCardTitle>
      </div>
    </Link>
  </StyledCard>
);

CoCard.propTypes = {
  sloganBig: PropTypes.string,
  sloganSmall: PropTypes.string,
  companyName: PropTypes.string,
  linkTo: PropTypes.string,
  info: PropTypes.string,
};

export default function Home() {
  const co1 = {
    sloganBig: 'Micro',
    sloganSmall: 'Nutrients',
    companyName: 'iPollen8',
    linkTo: '/welcome',
  };
  const co2 = {
    sloganBig: 'Precision',
    sloganSmall: 'Mechanization',
    companyName: 'cygnus',
    info:
      'An industrial agriculture aerial robotic system designed to revolutionize nature-based crop dusting',
  };
  const co3 = {
    sloganBig: 'Energy',
    sloganSmall: 'Resource',
    companyName: 'H.A.W.K',
    info:
      'High Altitude Wing Kite provides clean electricity to power all your farm equipments remotely',
  };

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
            <CoCard
              sloganBig={co1.sloganBig}
              sloganSmall={co1.sloganSmall}
              companyName={co1.companyName}
              linkTo={co1.linkTo} />
          </Col>
          <Col md="4">
            <CoCard
              sloganBig={co2.sloganBig}
              sloganSmall={co2.sloganSmall}
              companyName={co2.companyName}
              info={co2.info} />
          </Col>
          <Col md="4">
            <CoCard
              sloganBig={co3.sloganBig}
              sloganSmall={co3.sloganSmall}
              companyName={co3.companyName}
              info={co3.info} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: '5rem' }}>
          <Col md={{ size: 10, offset: 1 }}>
            <h3 style={{ fontWeight: 'bold' }}>Supported By</h3>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }} style={{ textAlign: 'center' }}>
            { supporterLogosArray.map(( src ) =>
              <LogoImage numElements={supporterLogosArray.length} src={src} /> )}
          </Col>
        </Row>
        <Row style={{ marginTop: '5rem' }}>
          <Col md={{ size: 10, offset: 1 }}>
            <h3 style={{ fontWeight: 'bold' }}>Media</h3>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }} style={{ textAlign: 'center' }}>
            { mediaLogosArray.map(( src ) =>
              <LogoImage numElements={mediaLogosArray.length} src={src} /> )}
          </Col>
        </Row>
      </Container>
    </MasterHead>
  );
}
