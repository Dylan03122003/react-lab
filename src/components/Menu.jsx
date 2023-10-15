/* eslint-disable react/prop-types */
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import DishDetail from "./DishDetail";

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <Container>
      <Row>
        {dishes.map((dish) => (
          <Col
            onClick={() => setSelectedDish(dish)}
            key={dish.id}
            xs={12}
            md={6}
            style={{
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <Image
                src={dish.image}
                fluid
                width={400}
                style={{ border: "1px solid gray", margin: "10px" }}
              />
              <h2
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  padding: "8px",
                }}
              >
                {dish.name}
              </h2>
            </div>
          </Col>
        ))}
      </Row>

      <DishDetail dish={selectedDish} />
    </Container>
  );
};

export default Menu;
