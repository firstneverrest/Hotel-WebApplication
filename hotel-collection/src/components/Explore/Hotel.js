import React from "react";

import hotelImg from "../../img/img-hotel-1.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneStar } from 'react-icons/ai'

const Hotel = () => {

  return (
    <div className="Hotel">
      <div className="container">
        <img className="Hotel__image" src={hotelImg} alt="hotel image" />
      </div>
      <div className="Hotel__content">
        <div className="Hotel__content-title">Hotel Name</div>
        <div className="Hotel__content-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia
          fugit minima veniam?
        </div>
      </div>
      <div className="Hotel__addition">
        <div className="Hotel__addition-location"><MdLocationOn className="Hotel__addition-locationIcon"/>location</div>
        <div className="Hotel__addition-rating"><AiTwotoneStar className="Hotel__addition-ratingIcon"/>rating</div>
      </div>
    </div>
  );
};

export default Hotel;