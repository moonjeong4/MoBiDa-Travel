import React, { useRef} from "react";
import '../styles/search-bar.css'
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  // const distanceRef = useRef(0);
  const maxPeopleRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    const maxPeople = maxPeopleRef.current.value;
    if (location === "" || maxPeople === "") {
      return alert("Please fill all the fields");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxPeople}`
    );
    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    navigate(`/tours/search?city=${location}&maxGroupSize=${maxPeople}`, {
      state: result.data,
    });
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <div className="searchHl">Search Your Holiday Package</div>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6 className="nor__title">Location</h6>
              <input
                className="custom-input"
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          {/* <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6 className="nor__title">Distance</h6>
              <input
                className="custom-input"
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup> */}
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6 className="nor__title">Max People</h6>
              <input
                className="custom-input"
                type="number"
                placeholder="0"
                ref={maxPeopleRef}
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};
export default SearchBar;