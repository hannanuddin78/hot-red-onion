import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../image/logo.png'

const Footer = () => {
    return (
      <Container fluid className="footer-container">
        <Row>
          <Col md={6} className="footer-logo">
            <img src={footerLogo} alt="" />
          </Col>
          <Col md={3} className="footer-top-right">
            <ul>
              <li>About Online food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </Col>
          <Col md={3} className="footer-top-right">
            <ul>
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={6}>
            <p>Copyright &copy; 2020 Online food</p>
          </Col>
          <Col md={6}>
            <div className="footer-bootom-right">
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Pricing</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Footer;