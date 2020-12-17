import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';

const ItemFood = () => {
    const {id} = useParams()
    const itemFood = FakeData.find(ifd => ifd.id.toString() === id)
    return (
      <Container className="itemFood-container">
        <Row>
          <Col md={6}>
            <h1>{itemFood.title}</h1>
            <p>{itemFood.fullDetails}</p>
            <Row>
              <Col md={6}>
                <h3>${itemFood.price}</h3>
              </Col>
              <Col md={6}>
                
              </Col>
            </Row>
          </Col>
          <Col md={6} className="itemFood-img-container">
            <img src={itemFood.img} alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default ItemFood;