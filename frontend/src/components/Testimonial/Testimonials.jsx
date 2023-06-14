import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-6.jpg";
import ava02 from "../../assets/images/ava-4.jpg";
import ava03 from "../../assets/images/ava-7.jpg";
import ava04 from "../../assets/images/ava-8.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    reponsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p style={{ height: "90px" }}>
          Absolutely amazing! The website provided me with incredible travel
          options and the reviews from fellow users helped me make informed
          decisions.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">John</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p style={{ height: "90px" }}>
          I was able to customize my trip and have a truly unique experience.I
          was impressed by the quality and authenticity of the user reviews on
          this website
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Lucas</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p style={{ height: "90px" }}>
          I love how easy it is to navigate through the website and find the
          perfect tours. The user reviews were invaluable in ensuring a
          fantastic travel experience.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Dan</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p style={{ height: "90px" }}>
          I can't say enough good things about the user reviews on this website.
          They provided valuable tips and recommendations, making my travel
          planning stress-free and enjoyable.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h5 className="mb-0 mt-3">Bismar</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonials;
