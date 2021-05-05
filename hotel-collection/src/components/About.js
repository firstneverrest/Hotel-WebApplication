import React from "react";

import HotelImg from '../img/img-hotel-3.jpg'

const About = () => {
  return (
    <div className="About-container">
      <div className="About">
        <h3 className="About__header">About</h3>
        <p className="About__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          adipisci! Aspernatur alias totam tenetur. Voluptatum dolores earum,
          commodi minima et aut accusamus ullam inventore harum obcaecati modi
          at dolorum ea! Corrupti vel temporibus, neque enim tenetur adipisci
          sunt facilis aut voluptate. Possimus voluptates quae quia molestiae
          aperiam blanditiis deserunt provident?
        </p>
      </div>

      <img src={HotelImg} className="About__background" alt="hotel"/>
    </div>
  );
};
export default About;
