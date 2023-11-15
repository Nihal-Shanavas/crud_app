import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/productDetailSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Create() {
  const [products, setProducts] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductData = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
    console.log(products);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('products...', products);
    dispatch(createProduct(products));
    navigate('/read');
  };

  return (
    <div>
      <Header />
      <h2 className='text-center mt-5'>ADD PRODUCT </h2>
      <Container className='mt-5 w-75 border border-dark   box  text-dark' style={{ borderRadius: '10px',backgroundColor:'218380' }}>
        <Row>
          <Col className='mt-5 mb-5'>
            <Form className='mx-auto' onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label  className='get'>Product name</Form.Label>
                <Form.Control  className='get' type='text' name='name' placeholder='Enter product name' onChange={getProductData} />
                <Form.Label  className='get'>Price</Form.Label>
                <Form.Control  className='get' type='number' name='price' placeholder='Enter product price' onChange={getProductData} />
                <Form.Label  className='get'>Description</Form.Label>
                <Form.Control  className='get' type='text' name='description' placeholder='Enter product description' onChange={getProductData} />
                <Form.Label  className='get'>Product image</Form.Label>
                <Form.Control  className='get' type='text' name='image' placeholder='Add product image URL' onChange={getProductData} />
                <Row className='mt-3'>
                  <Col>
                    <Form.Check
                    className='get'
                    inline
                      type='radio'
                      label='Laptop'
                      name='category'
                      value='laptop'
                      onChange={getProductData}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                    className='get'
                    inline
                      type='radio'
                      label='Mobile'
                      name='category'
                      value='mobile'
                      onChange={getProductData}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                    className='get'
                    inline
                      type='radio'
                      label='Accessories'
                      name='category'
                      value='accessories'
                      onChange={getProductData}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                    className='get'
                      inline
                      type='radio'
                      label='Cables'
                      name='category'
                      value='cables'
                      onChange={getProductData}
                    />
                  </Col>
                </Row>
                <Button type='submit' className='title2 bg-white btn text-black mt-3 '>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
