/* eslint-disable react/prop-types */

import { Col, Image, Row } from "react-bootstrap";
import { getFormatedDate } from "../utils/getFormatedDate";

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    if (!dish) return <div></div>;

    return (
      <Row>
        <Col xs={12} md={6}>
          <div>
            <Image src={dish.image} fluid width={400} />
            <h2 style={{ marginTop: "20px" }}>{dish.name}</h2>
            <p>{dish.description}</p>
          </div>
        </Col>

        <Col xs={12} md={6} style={{ cursor: "pointer" }}>
          <h2>Comments</h2>
          {dish.comments.map((c) => (
            <div key={c.id}>
              <p>{c.comment}</p>
              <p>
                -- {c.author} , {getFormatedDate(new Date(c.date))}
              </p>
            </div>
          ))}
        </Col>
      </Row>
    );
  };

  return renderDish(dish);
};

export default DishDetail;
