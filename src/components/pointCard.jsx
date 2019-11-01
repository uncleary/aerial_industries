/* eslint-disable react/prop-types */
import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Button,
} from 'reactstrap';

const PointCard = ({ subtitle, icon }) => (
  <Card>
    <CardImg
      top
      width="100%"
      src={icon}
      alt="Card image cap"
      style={{ padding: '4rem' }} />
    <CardBody>
      <CardTitle
        style={{
          textAlign: 'left',
          width: '90%',
          margin: 'auto',
          paddingBottom: '2rem',
        }}>
        <h4>{subtitle}</h4>
      </CardTitle>
      <Button>See More</Button>
    </CardBody>
  </Card>
);

export default PointCard;
