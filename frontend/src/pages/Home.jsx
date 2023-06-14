import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import chinavideo from "../assets/images/china.mp4";
import koreavideo from "../assets/images/Korea.mp4";
import cubavideo from "../assets/images/Cuba.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/new-experience.jpg";

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import TestimonialList from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import homevideo from "../assets/images/home.mp4";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="home">
        <div className="overlay"></div>
        <video
          src={homevideo}
          alt="home"
          autoPlay
          loop
          muted
          type="video/mp4"
          className="home__video"
        />
        <div className="home__content">
          <Container>
            <Row>
              <Col lg="2">
                <div className="hero__img-box">
                  <label className="countryl">Korea</label>
                  <video src={koreavideo} alt="China" controls />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box">
                  <label className="countryl">China</label>
                  <video src={chinavideo} alt="" controls />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero__img-box">
                  <label className="countryl">Cuba</label>
                  <video src={cubavideo} alt="" controls />
                </div>
              </Col>
              <Col md="6">
                <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={"Let's Go"} />
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>
                    Create Lifelong
                    <span className="highlight"> Memories</span>
                  </h1>
                  <p className="p__co">
                    Unleash your inner explorer and let travel ignite your
                    soul.Discover new horizons and embrace the beauty of travel.
                  </p>
                </div>
              </Col>
              <SearchBar />
            </Row>
          </Container>
        </div>
      </section>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* feature section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="feature__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* feature section end */}
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Row>
              <Col lg="6">
                <div className="experience__content">
                  <Subtitle subtitle={"Experience"} />
                  <h2>
                    With our all experience
                    <br />
                    we will serve you
                  </h2>
                  <p>
                    With our wealth of experience, we are committed to serving
                    you and creating unforgettable travel memories.
                  </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>15k+</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
      {/* experience section end */}

      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Our gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}
      {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our fans love about us
              </h2>
            </Col>
            <Col lg="12">
              <TestimonialList />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial section end */}
      <Newsletter />
    </>
  );
};
export default Home;
