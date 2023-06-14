import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thankyou.css";

const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <div className="h3 mb-4">You tour is booked</div>
              <button className="btn primary__btn w-25">
                <Link to="/home">Back to home</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ThankYou;
