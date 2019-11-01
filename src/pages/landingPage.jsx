/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import '../styles/config.scss';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import EmailSignUp from '../components/signup';
import PointCard from '../components/pointCard';
import coverImage from '../assets/img/background/womanfarmer.jpg';
import sproutIcon from '../assets/img/icons/001-sprout.png';
import worldIcon from '../assets/img/icons/007-world.png';
import solarIcon from '../assets/img/icons/008-solar-energy.png';
import farmerIcon from '../assets/img/icons/002-farmer.png';
import peppersImage from '../assets/img/background/peppers.jpg';

const GraySection = styled.section`
  position: relative;
  background-color: #e9ecef;
  padding: 6rem 0rem;
`;

const TransparentSection = styled.section`
  position: relative;
  padding: 6rem 0rem;
`;

const CoverImage = styled.div`
  background-image: url(${coverImage});
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 8rem;
  padding-left: 2rem;
`;

const MasterHeadH1 = styled.h1`
  margin-top: 7rem;
  text-align: left;
  font-size: 5rem;
  font-weight: medium;
  color: white;
`;

const SectionH1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  font-size: 3rem;
  font-weight: medium;
`;

const SectionH2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  font-size: 1.7rem;
  line-height: 1.5;
  color: #444;
`;

const SectionH3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5;
`;

export default function LandingPage() {
  return (
    <div>
      <CoverImage>
        <TransparentSection>
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
        </TransparentSection>
      </CoverImage>

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
              <PointCard subtitle="Zero Residue Farmers" icon={sproutIcon} />
            </Col>
            <Col md="3">
              <PointCard subtitle="Precision Mechanization" icon={farmerIcon} />
            </Col>
            <Col md="3">
              <PointCard subtitle="Community Impact" icon={worldIcon} />
            </Col>
            <Col md="3">
              <PointCard subtitle="Innovative Farms" icon={solarIcon} />
            </Col>
          </Row>
        </Container>
      </GraySection>

      <TransparentSection>
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
            <Col md="4">
              <img alt="fresh peppers" style={{ maxWidth: '100%', padding: '1rem', marginTop: '1rem' }} src={peppersImage} />
            </Col>
          </Row>
        </Container>
      </TransparentSection>

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
          <Row />
        </Container>
      </GraySection>

      <TransparentSection>
        <Container>
          <Row>
            <Col md="8" offset="2" style={{ margin: 'auto' }}>
              <SectionH2>Create your investment account with iPollen8</SectionH2>
              <EmailSignUp />
            </Col>
          </Row>
        </Container>
      </TransparentSection>
    </div>
  );
}
