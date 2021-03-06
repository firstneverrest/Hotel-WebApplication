import React from "react";
import HotelImg from "../img/img-hotel-2.jpg";

const Favorite = () => {
  return (
    <div className="Favorite-container">
      <div className="Favorite">
        <h3 className="Favorite__header">Favorite</h3>
        <p className="Favorite__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          adipisci! Aspernatur alias totam tenetur. Voluptatum dolores earum,
          commodi minima et aut accusamus ullam inventore harum obcaecati modi
          at dolorum ea! Corrupti vel temporibus, neque enim tenetur adipisci
          sunt facilis aut voluptate. Possimus voluptates quae quia molestiae
          aperiam blanditiis deserunt provident?
        </p>
      </div>
      <img src={HotelImg} className="Favorite__background" alt="hotel"/>
    </div>
  );
};

export default Favorite;
