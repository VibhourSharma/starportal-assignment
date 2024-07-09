import React from "react";
import Card from "./Card";
import HeroCarouselData from "./data";

const HeroCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {HeroCarouselData.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Card
              imgSrc={item.imgSrc}
              imageContentMain={item.imageContentMain}
              imageContentDescription={item.imageContentDescription}
              contentHeading={item.contentHeading}
              contentDescription={item.contentDescription}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon absolute top-40 left-28  py-8 bg-white/10 backdrop-blur-lg rounded-sm"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className=""
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon absolute top-40 right-28 py-8 backdrop-blur-sm bg-white/10 rounded-sm"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
