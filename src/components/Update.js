import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productDetailSlice';
import Header from './Header';

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const { products, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleProduct = products.filter((i) => i.id === id);
      setUpdateData(singleProduct[0]);
    }
  }, [id, products]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updateData));
    navigate('/read');
  };

  return (
    <div>
      <Header />
      <div className='mt-5'>
        <u>
          <h2 className='text-center'>EDIT PRODUCT DETAILS</h2>
        </u>
        <Container className='mt-5 border bg-light text-dark' style={{ borderRadius: '10px', padding: '20px' }}>
          <Row>
            <Col>
              <Form className='mx-auto' onSubmit={handleUpdate}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Product name</Form.Label>
                  <Form.Control type='text' name='name' placeholder='Enter product name' value={updateData && updateData.name} onChange={newData} />
                  <Form.Label>Price</Form.Label>
                  <Form.Control type='number' name='price' placeholder='Enter product price' value={updateData && updateData.price} onChange={newData} />
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' name='description' placeholder='Enter product description' value={updateData && updateData.description} onChange={newData} />
                  <Form.Label>Product image</Form.Label>
                  <Form.Control type='text' name='image' placeholder='Add product image' value={updateData && updateData.image} onChange={newData} />

                  <Row className='mt-3'>
                    <Col>
                      <Form.Check
                        inline
                        type='radio'
                        label='Laptop'
                        name='category'
                        value='laptop'
                        checked={updateData && updateData.category === 'laptop'}
                        onChange={newData}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type='radio'
                        label='Mobile'
                        name='category'
                        value='mobile'
                        checked={updateData && updateData.category === 'mobile'}
                        onChange={newData}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type='radio'
                        label='Accessories'
                        name='category'
                        value='accessories'
                        checked={updateData && updateData.category === 'accessories'}
                        onChange={newData}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        type='radio'
                        label='Cables'
                        name='category'
                        value='cables'
                        checked={updateData && updateData.category === 'cables'}
                        onChange={newData}
                      />
                    </Col>
                  </Row>

                  <Button type='submit' className='mt-3 hb'>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Update;
