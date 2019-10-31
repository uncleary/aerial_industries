import React from 'react';
import { Table } from 'reactstrap';

const FarmerDetailsTable = ({farmerName, coord, details}) => (
  // <div><h1>{JSON.stringify(details)}</h1></div>
  <Table hover>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Farm ID</th>
        <td>{'ae0024-26-' + details.id}</td>
      </tr>
      <tr>
        <th scope="row">Farmer</th>
        <td>{farmerName}</td>
      </tr>
      <tr>
        <th scope="row">Cluster Location</th>
        <td>{coord}</td>
      </tr>
      <tr>
        <th scope="row">Cooperative ID</th>
        <td>{details.coopId}</td>
      </tr>
      <tr>
        <th scope="row">Size of Operation</th>
        <td>{details.sizeOfOps}</td>
      </tr>
      <tr>
        <th scope="row">Potential Sales Value</th>
        <td>{details.potentialSalesValue}</td>
      </tr>
      <tr>
        <th scope="row">Funding Target</th>
        <td>{details.fundingTarget}</td>
      </tr>
      <tr>
        <th scope="row">Current Status</th>
        <td>{details.currentFundingPercent}</td>
      </tr>
      <tr>
        <th scope="row">Transaction Update</th>
        <td>{details.transactionUpdate}</td>
      </tr>
    </tbody>
  </Table>
);

export default FarmerDetailsTable;
