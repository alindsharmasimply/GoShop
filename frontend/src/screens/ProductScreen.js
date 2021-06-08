import React from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush" style={{ border: "0", borderRadius: "0" }}>
            <ListGroup.Item style={{ border: "0", borderRadius: "0" }}>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0", borderRadius: "0" }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0", borderRadius: "0" }}>
              Price: &#8377; {product.price}
            </ListGroup.Item>
            <ListGroup.Item style={{ border: "0", borderRadius: "0" }}>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        Price:
                        </Col>
                        <Col>
                        <strong>&#8377; {product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        Status:
                        </Col>
                        <Col>
                        <strong>{product.countInStock > 0 ? 'Available' : 'Not Available'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    <Button className='btn-block' type='button' disabled={product.countInStock > 0 ? false : true}>
                        Add to Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
