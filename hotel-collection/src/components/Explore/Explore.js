import React, { useState } from "react";

import hotel1 from "../../img/img-hotel-1.jpg";
import { IoSearch } from "react-icons/io5";
import Hotels from './Hotels'

const Explore = () => {
  const [search, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="explore">
      <h1 className="explore__title">Popular Thailand Hotel</h1>
      <h4 className="explore__categories-title">Categories</h4>
      <div className="explore__categories">
        <div className="explore__categories-btn">
          <img
            className="explore__categories-image"
            src={hotel1}
            alt="Bangkok"
          />
          <p className="explore__categories-text">Bangkok</p>
        </div>
        <div className="explore__categories-btn">
          <img
            className="explore__categories-image"
            src={hotel1}
            alt="Bangkok"
          />
          <p className="explore__categories-text">Bangkok</p>
        </div>
        <div className="explore__categories-btn">
          <img
            className="explore__categories-image"
            src={hotel1}
            alt="Bangkok"
          />
          <p className="explore__categories-text">Bangkok</p>
        </div>
        <input
          className="explore__search"
          type="text"
          value={search}
          placeholder="search..."
          onChange={searchChangeHandler}
        />
        <button className="explore__search-btn"><IoSearch /></button>
      </div>
      <Hotels /> 
    </div>
  );
};

export default Explore;
