import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home mb-5'>
      <Container>
        <Row className='mt-5 mb-5'>
          <Col lg={12} md={12} sm={12} xs={12} className='text-light text-center mt-1 mb-5'>
            <h1 className='title1' style={{ color: 'white' }}>TECH HEAVEN</h1>
            <h4 className='text-center title2' style={{ color: 'white' }}>"
Step into TECH HEAVEN – Redefining Your Digital Lifestyle." </h4>

            {/* Add your single image here */}
            <img src="https://i.postimg.cc/h4shS1Jw/pexels-karol-d-325153.jpg" className='w-100 mt-1 mb-3' style={{ height: '450px', objectFit: 'cover', borderRadius: '10px', marginTop: '20px' }} alt="" />
            
            <Link to={'/add'}>
              <button className='hb mt-1 w-50 border-0 mb-5 get' style={{ backgroundColor: 'white', color: 'black' }}>GET STARTED</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
