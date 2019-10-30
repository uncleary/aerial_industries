/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Col, Card, Button, CardImg, CardBody, CardTitle,
} from 'reactstrap';

const FarmerCard = ({ farmerData }) => {
  // const reqImg = require('' + farmerData.imgLink);
  return (
    <Col md="4" style={{ marginTop: '2rem' }}>
      <Card>
        <CardImg
          top
          width="100%"
          src={farmerData.imgLink}
          alt="Farmer Image" />
        <CardBody>
          <CardTitle
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}>
            {farmerData.farmerName}
          </CardTitle>
          <h4 style={{}}>{farmerData.cropType}</h4>
          <p>{farmerData.farmingStage}</p>
          <p>
            <small className="text-muted">{farmerData.location.region}</small>
          </p>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default FarmerCard;
