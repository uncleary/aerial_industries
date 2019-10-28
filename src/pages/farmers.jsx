/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/config.scss';
import { Container, Row, Col } from 'reactstrap';
import farmersList from '../static/data/farmersList';
import FarmerCard from '../components/farmerCard';
import Title from '../components/title';
import FilterBox from '../components/filterBox';

const WhiteBgSection = styled.section`
  position: relative;
  background-color: white;
  padding: 6rem 0rem;
`;

const SingleFilterBox = ({ filterName, filterArray }) => (
  <div className="mt-5">
    <h3>{filterName}</h3>
    <ColoredLine color="gray" />
    <FilterBox filters={filterArray} />
  </div>
);

const filterCategories = [
  { filter: 'Region', filterArray: ['NorthEast', 'SouthWest', 'SouthEast'] },
  { filter: 'Produce Type', filterArray: ['Rice', 'Plantain', 'Maize'] },
  {
    filter: 'Farming Stage',
    filterArray: [
      'Pre-Emergence',
      'Post-Emergence',
      'Pre-Harvest',
      'Post-Harvest',
    ],
  },
];

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 2,
    }} />
);

export default function Farmers() {
  const [list] = useState(farmersList);

  return (
    <WhiteBgSection>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Title>Farmers</Title>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            {filterCategories.map((item) => (
              <SingleFilterBox
                filterName={item.filter}
                filterArray={item.filterArray} />
            ))}
          </Col>
          <Col md="9">
            <Row>
              {list.map((item) => (
                <FarmerCard farmerData={item} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </WhiteBgSection>
  );
}
