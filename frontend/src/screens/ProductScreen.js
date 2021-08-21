import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
//import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = ({ history, match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product} = productDetails;
  useEffect(() => {

    dispatch(listProductDetails(match.params.id));

  },[match])
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  return (
    <div>
      <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (<Loader/>) : error ? (<Message variant="danger">{error}</Message>) : (
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
                {
                  product.countInStock > 0 && 
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Quantity: 
                      </Col>
                      <Col>
                        <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))
                        }
                        </Form.Control>
                      </Col>
                    </Row>
                    </ListGroup.Item>
                }
                <ListGroup.Item className='text-center'>
                    <Button className='btn-block' 
                    onClick={addToCartHandler}
                    type='button' disabled={product.countInStock > 0 ? false : true}>
                        Add to Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>)}
      </>
    </div>
  );
};

export default ProductScreen;
