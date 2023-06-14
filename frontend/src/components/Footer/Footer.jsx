import React from "react";
import "./footer.css";
import { Col, Row, Container, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: "/Home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Embrace the world of adventure with MoBiDa, your ultimate travel
                companion, guiding you to unforgettable destinations and
                extraordinary experiences.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="2">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="4">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i className="ri-map-pin-2-fill"></i>
                    Address:
                  </span>
                </h6>
                <p className="mb-0">325 Bd de la Cite-des-Jeunes,Gatineau</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i className="ri-map-pin-2-fill"></i>
                    Phone:
                  </span>
                </h6>
                <p className="mb-0">
                  <a href="tel:438-987-1111">438-987-1111</a>
                </p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6>
                  <span>
                    <i className="ri-map-pin-2-fill"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">
                  <a href="mailto:MoBiDa@gmail.com">MoBiDa@gmail.com</a>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year},design and develop by Dan Yu, Moon Jeong, Morales
              Managanelly Bismar.All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
