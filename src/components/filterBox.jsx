/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

const FilterBox = ({ filters }) => (
  <Form>
    {filters.map((item) => (
      <FormGroup check>
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
