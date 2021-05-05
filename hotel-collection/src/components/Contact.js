import React from "react";

import HotelImg from '../img/img-hotel-4.jpg'

const Contact = () => {
  return (
    <div className="Contact-container">
      <div className="Contact">
        <h3 className="Contact__header">Contact</h3>
        <p className="Contact__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          adipisci! Aspernatur alias totam tenetur. Voluptatum dolores earum,
          commodi minima et aut accusamus ullam inventore harum obcaecati modi
          at dolorum ea! Corrupti vel temporibus, neque enim tenetur adipisci
          sunt facilis aut voluptate. Possimus voluptates quae quia molestiae
          aperiam blanditiis deserunt provident?
        </p>
      </div>

      <img src={HotelImg} className="Contact__background" alt="hotel"/>
    </div>
  );
};

export default Contact;
