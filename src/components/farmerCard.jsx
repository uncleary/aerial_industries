/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Col, Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const FarmerCard = ({ farmerData }) => (
  <Col md="4" style={{ marginTop: '2rem' }}>
    <Card>
      <Link to={`/farmers/${farmerData.id < 4 ? farmerData.id : 3}`}>
        <CardImg top width="100%" src={farmerData.imgLink} alt="Farmer Image" />
      </Link>
      <CardBody>
        <CardTitle
          style={{
            textAlign: 'left',
            fontWeight: '700',
            fontSize: '1.5rem',
          }}>
          {farmerData.farmerName}
        </CardTitle>
        <h4 style={{ fontWeight: '500', fontSize: '1.2rem' }}>
          {farmerData.cropType}
        </h4>
        <p>{farmerData.farmingStage}</p>
        <p>
          <small className="text-muted">{farmerData.location.region}</small>
        </p>
        <Link to={`/farmers/${farmerData.id < 4 ? farmerData.id : 3}`}>
          <p style={{ color: 'black' }}>{'See More >'}</p>
        </Link>
      </CardBody>
    </Card>
  </Col>
);
export default FarmerCard;
