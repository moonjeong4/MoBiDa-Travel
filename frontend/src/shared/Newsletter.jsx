import React from "react";
import "../styles/newsletter.css";

import { Col, Row, Container } from "reactstrap";
import maleTourist from "../assets/images/new-subscribe.jpg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to our newsletter</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Subscribe to our newsletter and stay up-to-date with the latest
                travel inspirations, exclusive deals, and insider tips delivered
                right to your inbox.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Newsletter;
