import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../styles/config.scss';

import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Button,
} from 'reactstrap';
import EmailSignUp from '../components/signup';

const GraySection = styled.section`
  position: relative;
  background-color: #e9ecef;
  padding: 6rem 0rem;
`;

const WhiteSection = styled.section`
  position: relative;
  background-color: white;
  padding: 6rem 0rem;
`;

const MasterHeadH1 = styled.h1`
  margin-top: 7rem;
  text-align: left;
  font-size: 5rem;
  font-weight: bold;
`;

const SectionH1 = styled.h1`
  margin-top: 4rem;
  margin-botton: 1rem;
  text-align: ${props => (props.left ? 'left' : 'center')};
  font-size: 3rem;
  font-weight: bold;
`;

const SectionH2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: ${props => (props.left ? 'left' : 'center')};
  font-size: 1.7rem;
  line-height: 1.5;
`;

const SectionH3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5;
`;

const CoCard = ({ subtitle }) => (
  <Card>
    <CardImg
      top
      width="100%"
      src="https://cdn5.vectorstock.com/i/1000x1000/76/54/avatar-male-farmer-icon-flat-style-vector-11427654.jpg"
      alt="Card image cap"
    />
    <CardBody>
      <CardTitle
        style={{
          textAlign: 'left',
          width: '90%',
          margin: 'auto',
          minHeight: '100px',
        }}
      >
        {subtitle}
      </CardTitle>
      <Button>See More</Button>
    </CardBody>
    {/* <CardText>Nutrients</CardText> */}
    {/* <Link to={linkTo || '/'} className="btn btn-outline-primary">
      Visit Company
    </Link>
    <h4 style={{ textAlign: 'right', paddingTop: '1rem' }}>{companyName}</h4> */}
  </Card>
);

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop); // General scroll to element function

const ScrollDemo = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div ref={myRef}>I wanna be seen</div>
      <button onClick={executeScroll}> Click to scroll </button>
    </>
  );
};

export default function LandingPage() {
  return (
    <div>
      <WhiteSection>
        <Container>
          <Row>
            <Col>
              <MasterHeadH1>Invest in Your Meals</MasterHeadH1>
              <SectionH2 left>
                We care about how our food is grown.
                <br />
                We care about the communities that grow our food.
              </SectionH2>
              <Button color="secondary" size="lg" className="mt-5">
                Find out more
              </Button>
            </Col>
          </Row>
        </Container>
      </WhiteSection>

      <GraySection>
        <Container>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <SectionH1>How it works</SectionH1>
              <SectionH2>Make Money While Eating Healthier</SectionH2>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <CoCard subtitle="Zero Residue Farmers" />
            </Col>
            <Col md="3">
              <CoCard subtitle="Precision Mechanization " />
            </Col>
            <Col md="3">
              <CoCard subtitle="Community Impact" />
            </Col>
            <Col md="3">
              <CoCard subtitle="Innovative Farms" />
            </Col>
          </Row>
        </Container>
      </GraySection>

      <WhiteSection>
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <SectionH1 left>Invest in Impact Farmers</SectionH1>
              <SectionH3 left>
                Farmers focused on sustainable community-based farmfield
                innovations in mechanization, agro-inputs and behavioral change
                are changing agriculture for the future.
              </SectionH3>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Africa utilizes less than 40% of its 874 million hectares of
                  arable land, yet spends US $35 billon importing food every
                  year.
                </p>
                <footer className="blockquote-footer">
                  Adesina Akinwumi, African Development Bank
                </footer>
              </blockquote>
              <Button color="secondary" size="lg" className="mt-5">
                Fund Farmers
              </Button>
            </Col>
          </Row>
        </Container>
      </WhiteSection>

      <GraySection>
        <Container>
          <Row className="text-center">
            <Col md={{ size: 10, offset: 1 }}>
              <SectionH1>From Farm to Fork</SectionH1>
              <SectionH2>Make Money While Eating Healthier</SectionH2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <p>
                Aerial Industries applies all crop enhancers, protectants and
                sti...
              </p>
            </Col>
            <Col md="4">
              <p>
                No synthetic compounds are in the residue tests conducted on...
              </p>
            </Col>
            <Col md="4">
              <p>
                Bayo practices the old techniques of conditioning for soil
                aggregat...
              </p>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </GraySection>

      <WhiteSection>
        <Container>
          <Row>
            <Col md="6" offset="3" style={{ margin: 'auto' }}>
              <SectionH1>Join the Community</SectionH1>
              <EmailSignUp />
            </Col>
          </Row>
        </Container>
      </WhiteSection>
    </div>
  );
}
