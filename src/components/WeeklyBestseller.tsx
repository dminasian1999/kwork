import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // обязательно подключить стили
import React from "react";
import { ourProjects } from "../utils/constants.ts";

const WeeklyBestseller = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 1 },
  };

  return (
    <div className="section">
      <div className="container mx-auto">
        <div className="text-start mb-6">
          <h2 className="text-3xl font-bold">Наши партнёры</h2>
        </div>

        <Carousel
          className="py-5"
          swipeable
          draggable
          showDots
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="px-2"
        >
          {ourProjects.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`Project ${index + 1}`}
              className="w-full object-cover rounded-xl"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WeeklyBestseller;
