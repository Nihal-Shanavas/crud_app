import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/productDetailSlice';

function Header() {
  const allProducts = useSelector((state) => state.app.products);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    dispatch(searchProduct(searchData));
  }, [searchData]);

  return (
    <div>
      <Navbar  expand="lg" className="header">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand href="#home">
              <img
                src="https://i.postimg.cc/zBccSqnm/download-removebg-preview-1.png"
                style={{ height: '60px', width: '70px' }}
                alt=""
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/add'} style={{ textDecoration: 'none' }}>
                <Nav.Link className='text-white' href="#home">
                  ADD
                </Nav.Link>
              </Link>
              <Link to={'/read'} style={{ textDecoration: 'none' }}>
                <Nav.Link className='text-white' href="#link">
                  View All ({allProducts.length})
                </Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
