import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, showProduct } from '../redux/productDetailSlice';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Header from './Header';

function Read() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState('');

  const dispatch = useDispatch();
  const { products, loading, searchData } = useSelector((state) => state.app);
  const allProducts = useSelector((state) => state.app.products);
  const singleProduct = allProducts.filter((i) => i.id === id);

  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  if (loading) {
    return <h1 className='text-center'><i className="fa-solid fa-regular fa-spinner fa-spin"></i></h1>;
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h2 className='text-center mt-5'>All Products</h2>
            <div className='text-center mt-5'>
              <input className='ms-3' name="category" checked={radioData === ''} type="radio" />
              <label className='ms-2 me-2'>All</label>
              <input className='ms-3' name="category" value="laptop" checked={radioData === "laptop"} type="radio" onChange={(e) => setRadioData(e.target.value)} />
              <label className='ms-2 me-2'>laptop</label>
              <input className='ms-3' name="category" value="mobile" checked={radioData === "mobile"} type="radio" onChange={(e) => setRadioData(e.target.value)} />
              <label className='ms-2 me-2'>mobile</label>
              <input className='ms-3' name="category" value="accessories" checked={radioData === "accessories"} type="radio" onChange={(e) => setRadioData(e.target.value)} />
              <label className='ms-2 me-2'>accessories</label>
              <input className='ms-3' name="category" value="cables" checked={radioData === "cables"} type="radio" onChange={(e) => setRadioData(e.target.value)} />
              <label className='ms-2 me-2'>cables</label>
            </div>
            <Row className='mt-5'>
              {products &&
                products
                  .filter((i) => {
                    if (searchData.length === 0) {
                      return i;
                    } else {
                      return i.name.toLowerCase().includes(searchData.toLowerCase());
                    }
                  })
                  .filter((i) => {
                    if (radioData === "laptop") {
                      return i.category === radioData;
                    } else if (radioData === "mobile") {
                      return i.category === radioData;
                    } else if (radioData === "accessories") {
                      return i.category === radioData;
                    } else if (radioData === "cables") {
                      return i.category === radioData;
                    } else {
                      return i;
                    }
                  })
                  .map((i) => (
                    <Col key={i.id} lg={3} md={4} sm={6} xs={12} style={{ marginBottom: '20px' }}>
                      <Card style={{ width: '100%', padding: '10px' }} className='border-0 ms-1 mt-2 bg-none'>
                        <Card.Img variant="top" src={i.image} style={{ height: '200px', objectFit: 'cover' }} />
                        <Card.Body className='allpcard'>
                          <Card.Title>{i.name}</Card.Title>
                          <Card.Text>
                            <p>Rs.{i.price}</p>
                            <p>{i.category}</p>
                            {i.description.length > 30 ? `${i.description.slice(0, 30)}..` : i.description}
                          </Card.Text>
                          <Button variant="" onClick={() => [setId(i.id), setShow(true)]}>View</Button>
                          <Modal
                            id={id}
                            show={show}
                            onHide={() => setShow(false)}
                            size="md"
                            className='text-black'
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                          >
                            <Modal.Header className='border-0' closeButton>
                              <Modal.Title>{i.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <img src={i.image} alt="" style={{ width: '100%' }} />
                              <p>{i.category}</p>
                              <p>Rs.{i.price}</p>
                              <p>Description: {i.description}</p>
                            </Modal.Body>
                          </Modal>
                          <Link to={`/edit/${i.id}`}>
                            <Button variant=""><i className="fa-solid fa-pen-to-square"></i></Button>
                          </Link>
                          <Button variant="" onClick={() => dispatch(deleteProduct(i.id))}><i className="fa-solid fa-trash"></i></Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Read;
