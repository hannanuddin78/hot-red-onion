import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import delivary from '../../image/fast-delivary.png';
import responder from '../../image/responder.png';
import homeDelivary from '../../image/homeDelivary.png';
import footerTopIcon1 from '../../image/footerTopIcon1.png';
import footerTopIcon2 from "../../image/footerTopIcon2.png";
import footerTopIcon3 from "../../image/footerTopIcon3.png";

const FooterTop = () => {
    return (
      <Container className="footer-top-card-container">
        <div>
          <h2>Why You Choose Us</h2>
          <p>
            Barton waited twenty always repair in within we do.An delighted
            offending <br />
            curiosity my is dashwoods at.Boy properous increasing surrounded.
          </p>
        </div>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={delivary} />
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <img src={footerTopIcon1} alt="" />
                  </Col>
                  <Col md={10}>
                    <Card.Title>First Delivary</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="link">See More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={responder} />
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <img src={footerTopIcon2} alt="" />
                  </Col>
                  <Col md={10}>
                    <Card.Title>A Good Auto Responder</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="link">See More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={homeDelivary} />
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <img src={footerTopIcon3} alt="" />
                  </Col>
                  <Col md={10}>
                    <Card.Title>Home Delivary</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="link">See More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default FooterTop;