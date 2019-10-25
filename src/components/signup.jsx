import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const EmailSignUp = (props) => {
  return (
    <Form style={{ marginTop: '3rem' }}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your email address" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleName" sm={2}>Full Name</Label>
        <Col sm={10}>
          <Input type="textarea" name="fullname" id="exampleName" placeholder="Your name" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default EmailSignUp;