import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container className='d-flex justify-content-center'>
      <Row>
        <Col xs={12} md={16}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
