import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const HeaderBottom = () => {
  return (
    <Container fluid>
      <Row className="bg-img">
        <div className="header-footer-area">
          <h1>Best Food Waiting For Your Belly</h1>
          <Form>
            <Form.Row className="Header-footer-form">
              <Col>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Search Food Item"
                />
              </Col>
              <Col>
                <Button type="submit" className="mb-2 header-footer-btn">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default HeaderBottom;
