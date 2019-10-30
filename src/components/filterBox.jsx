/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

const FilterBox = ({ filters }) => (
  <Form>
    {filters.map((item, index) => (
      <FormGroup check key={index}>
        <Label check style={{ marginBottom: '1rem' }}>
          <Input type="checkbox" />
          {' '}
          {item}
        </Label>
      </FormGroup>
    ))}
  </Form>
);

export default FilterBox;
