/* eslint-disable react/prop-types */
import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
} from 'reactstrap';

const PointCard = ({ subtitle, icon }) => (
  <Card style={{ marginBottom: '1.5rem' }}>
    <CardImg
      top
      width="100%"
      src={icon}
      alt="Card image cap"
      style={{ padding: '4rem', filter: 'grayscale(100%)' }} />
    <CardBody>
      <CardTitle
        style={{
          textAlign: 'left',
          width: '90%',
          margin: 'auto',
          paddingBottom: '2rem',
        }}>
        <p>{subtitle}</p>
      </CardTitle>
      <p style={{ fontWeight: 'bold' }}>{'See More >'}</p>
    </CardBody>
  </Card>
);

export default PointCard;
