import React from "react";
import { bgHeroImg } from "../utils/constants.ts"

const slides = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/024/714/974/non_2x/earthenware-pottery-collection-ornate-patterns-rustic-decoration-generated-by-ai-free-photo.jpg",
    caption: "Gejekoushian’s Armenian Ceramics – Authentic Craft from Jerusalem",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/026/350/225/large_2x/ornate-earthenware-pottery-adorns-rustic-kitchen-table-generated-by-ai-free-photo.jpg",
    caption: "Handcrafted Armenian Pottery – Timeless Art from Jerusalem",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/025/185/814/large_2x/antique-teapot-ornate-decoration-chinese-culture-elegance-generated-by-ai-free-photo.jpg",
    caption: "Authentic Souvenirs – Bringing Tradition Into Your Home",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/055/978/362/non_2x/crafting-pottery-with-fern-patterns-in-a-creative-workspace-during-daylight-free-photo.jpeg",
    caption: "Every Piece Tells a Story – Crafted with Heritage & Passion",
  },

];

const Slideshow = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner " >
        <div className="carousel-item active"  style={{maxHeight:"1050px"}}>
          <img src={bgHeroImg} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          <div className="carousel-caption d-none d-md-block text-start top-50">
            <div className={'myh1 '}>Стильная одежда для любого события!</div>
            <div className={'text-break myText mt-3' +
              ''}>Арендуйте модные наряды на свадьбу, вечеринку или фотосессию. Премиум стиль, доступный каждому.</div>
            <div className="btn btn-light btn-lg text-uppercase  hero-btn rounded-0 mt-3">Посмотреть каталог</div>
          </div>
        </div>
        <div className="carousel-item "  style={{maxHeight:"1050px"}}>
          <img src={bgHeroImg} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          <div className="carousel-caption d-none d-md-block text-start top-50">
            <div className={'myh1 '}>Стильная одежда для любого события!</div>
            <div className={'text-break myText mt-3' +
              ''}>Арендуйте модные наряды на свадьбу, вечеринку или фотосессию. Премиум стиль, доступный каждому.</div>
            <div className="btn btn-light btn-lg text-uppercase  hero-btn rounded-0 mt-3">Посмотреть каталог</div>
          </div>
        </div>
        <div className="carousel-item active"  style={{maxHeight:"1050px"}}>
          <img src={bgHeroImg} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          <div className="carousel-caption d-none d-md-block text-start top-50">
            <div className={'myh1 '}>Стильная одежда для любого события!</div>
            <div className={'text-break myText mt-3' +
              ''}>Арендуйте модные наряды на свадьбу, вечеринку или фотосессию. Премиум стиль, доступный каждому.</div>
            <div className="btn btn-light btn-lg text-uppercase  hero-btn rounded-0 mt-3">Посмотреть каталог</div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
};

export default Slideshow;
