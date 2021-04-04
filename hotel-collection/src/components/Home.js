import React from "react";

import mp4 from "../img/video.mp4";
import webm from "../img/video.webm";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <h1 className="Home__header">Popular Thailand Hotel</h1>
      <div className="Home-container">
        <p className="Home__subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nemo
          ex, in esse itaque perspiciatis, quisquam vel ipsum ut culpa iusto
          nihil non reiciendis dolore incidunt, enim voluptas eius facilis!
        </p>
      </div>
      <button className="Home__start">get started</button>
      <Footer />
    </div>
  );
};

export default Home;
