import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import headerLogo from "../../image/logo2.png";

const HeaderTop = () => {
  return (
    <Container fluid>
      <Row className="header-nav">
        <Col md={6}>
          <div className="header-logo">
            <img src={headerLogo} alt="logo header" />
          </div>
        </Col>
        <Col md={6}>
          <div className="header-login">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Log In">Log In</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button variant="danger">Sign Up</Button>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderTop;
