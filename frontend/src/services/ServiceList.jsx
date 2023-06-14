import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Discover the best destinations and stay ahead of the weather with our travel website",
  },
  {
    imgUrl: guideImg,
    title: "Find a Guide",
    desc: "Find experienced guides who will take you off the beaten path, reveal hidden gems, and share insider knowledge.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Hand-pick your itinerary, choose unique accommodations, and design your perfect adventure.",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};
export default ServiceList;
