import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuItemFood = (props) => {
    const { img, title, shortDetails, price, id} = props.food;
    return (
      <Col md={4} className="MenuItemFood-container">
        <Link to={"/itemFood/"+id}>
          <Card style={{ width: "18rem", padding: "15px" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="MenuItemFood-card-body">
              <h5>{title}</h5>
              <p>{shortDetails}</p>
              <p>$ {price}</p>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
};

export default MenuItemFood;