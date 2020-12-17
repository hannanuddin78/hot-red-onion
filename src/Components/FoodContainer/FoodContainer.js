import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FakeData from '../FakeData/FakeData';
import MenuItemFood from '../MenuItemFood/MenuItemFood';

const FoodContainer = () => {
    const [food, setFood] = useState(
      FakeData.filter((fd) => fd.shiftFood === "lunch")
    );
    const handleBreakfast = (shiftFood) => {
      const MenuItemFood = FakeData.filter(
        (fd) => fd.shiftFood.toString() === shiftFood
      );
      MenuItemFood.click = true;
      setFood(MenuItemFood);
    };
    console.log(food);
    return (
      <Container>
        <Row>
          <Col className="food-shift-list">
            <ul>
              <li onClick={() => handleBreakfast("Breakfast")}>Breakfast</li>
              <li onClick={() => handleBreakfast("lunch")}>lunch</li>
              <li onClick={() => handleBreakfast("Dinner")}>Dinner</li>
            </ul>
          </Col>
        </Row>
        <Row>
          {food.map((fd) => (
            <MenuItemFood key={fd.id} food={fd}></MenuItemFood>
          ))}
        </Row>
      </Container>
    );
};

export default FoodContainer;