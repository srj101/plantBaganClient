import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <div className='footerArea'>
        <Container>
            <Row>
                <Col lg={7}>
                    <Row>
                        <Col>
                            <div className="team_members footer-widget">
                                <h2>Our Team Members</h2>
                                <div className="teammates_images">
                                    <img src="https://gravatar.com/avatar/52895825092ea78cc046d75cce45ebb1?s=200&d=mp&r=x" alt="" />
                                    <img src="https://gravatar.com/avatar/52895825092ea78cc046d75cce45ebb1?s=200&d=mp&r=x" alt="" />
                                    <img src="https://gravatar.com/avatar/52895825092ea78cc046d75cce45ebb1?s=200&d=mp&r=x" alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                    Home
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                    News
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                    Video
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-widget">
                                <h3 className="widget-title">
                                    Course
                                </h3>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <Row>
                        <Col>
                           <div className="footer-download-app">
                            <Link to={"/"}  className='app_download'>Download App</Link>
                                <span>Hotline: 574+9489</span>
                                <span>Email : email@gmail.com</span>
                           </div>
                        </Col>
                        <Col>
                            <div className="footer_contact">
                                <input type="email" placeholder='Type your email' />
                                <input type="submit" value={`submit`} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="footer_bottom">
                    <Container>
                        <Row>
                            <span>Powered By Divlap Soft</span>
                        </Row>
                    </Container>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer