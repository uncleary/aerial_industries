import React from 'react';
import {
  Col, Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

const EmailSignUp = () => (
  <Form style={{ marginTop: '3rem', maxWidth: '80%', margin: 'auto' }}>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>
        Email
      </Label>
      <Col sm={10}>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Your email address" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleName" sm={2}>
        Full Name
      </Label>
      <Col sm={10}>
        <Input
          type="text"
          name="fullname"
          id="exampleName"
          placeholder="Your name" />
      </Col>
    </FormGroup>
    <FormGroup check row>
      <Col style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Button color="secondary" size="lg" style={{ padding: '1rem 3rem' }}>
          Register
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

export default EmailSignUp;
