/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import {
  Container, Row, Col, Form,
} from 'reactstrap';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://industries.us5.list-manage.com/subscribe/post?u=5a26c7df6ddc588d16a7dbce0&amp;id=09d0909236';

const SubmitButton = styled.button`
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  background-color: rgb(51, 51, 51);
  border-color: rgb(51, 51, 51);
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  color: #fff;
  display: inline-block;
  font-weight: 400;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  let name;
  const submit = () => email
    && name
    && email.value.indexOf('@') > -1
    && onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <Col style={{ textAlign: 'center' }}>
      <Form style={{ marginTop: '3rem', maxWidth: '400px', margin: 'auto' }}>
        {status === 'sending' && (
          <div style={{ color: 'blue' }}>Sending...</div>
        )}
        {status === 'error' && (
          <div
            style={{ color: 'red' }}
            dangerouslySetInnerHTML={{ __html: message }} />
        )}
        {status === 'success' && (
          <div
            style={{ color: 'green' }}
            dangerouslySetInnerHTML={{ __html: message }} />
        )}
        <StyledInput
          ref={(node) => (name = node)}
          type="text"
          placeholder="Your name" />
        <StyledInput
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email" />
        <SubmitButton type="submit" onClick={submit}>
          Submit
        </SubmitButton>
      </Form>
    </Col>
  );
};

const TransparentSection = styled.section`
  position: relative;
  padding: 4rem 0rem;
  padding-top: 35%;
  padding-bottom: 35%;

  @media (min-width: 768px) {
    padding-top: 15%;
    padding-bottom: 15%;
  }

  @media (min-width: 1000px) {
    padding-top: 10%;
    padding-bottom: 10%;
  }
`;

const SectionH2 = styled.h2`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  font-size: 1.4rem;
  line-height: 1.5;
  color: #666;
`;

const EmailSignUp = () => (
  <TransparentSection>
    <Container>
      <Row id="SignUp">
        <Col md="8" offset="2" style={{ margin: 'auto' }}>
          <SectionH2>Create your investment account with iPollen8</SectionH2>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)} />
            )} />
        </Col>
      </Row>
    </Container>
  </TransparentSection>
);

export default EmailSignUp;
