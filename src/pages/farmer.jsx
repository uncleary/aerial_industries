import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../styles/config.scss';

import {
  Container,
  Row,
} from 'reactstrap';

const MasterHead = styled.section`
  position: relative;
  background-color: #e9ecef;
  padding: 6rem 4rem;
`;

export default function Farmer() {
  return (
    <MasterHead>
      <Container>
        <Row>
          <h1>Hello Farmers!</h1>
        </Row>
      </Container>
    </MasterHead>
  );
}
