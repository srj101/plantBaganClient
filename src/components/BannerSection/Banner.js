import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
function Banner() {
  return (
    <div className='bannerSection'>
        <Container>
            <Row>
                <Col>
                    <div className="banner">
                        <div className="banner_bg">
                            <img src="https://i.ibb.co/k1fGmCM/stock-photo-1035221900.webp" alt="" />
                        </div>
                        <div className="banner_content">
                            <h3>Eid Offer <br />
                            Buy one get one free <br />
                            50% off</h3>
                            <Link className='buyNow' to="plant/id">Buy Now</Link>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="banner">
                        <div className="banner_bg">
                            <img src="https://i.ibb.co/y5qkNB6/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="banner_content">
                            <h3>Eid Offer <br />
                            Buy one get one free <br />
                            50% off</h3>
                            <Link className='buyNow' to="plant/id">Buy Now</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner