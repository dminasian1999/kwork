import React from "react"
import { bgHero2Img, bgHeroImg, categoryTiles, subscriptionPrices } from "../utils/constants.ts"

const TailoringSection = () => (
  <section className="tailoring-section py-5 my-5 text-center">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2
          className="catalog-title text-start"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500, // Medium weight
            fontStyle: "normal", // Medium isn’t valid, use normal/italic
            fontSize: "50px",
            lineHeight: "54px",
            letterSpacing: "4px", // % not valid in React inline styles
            textTransform: "uppercase",
          }}
        >
          ИНДИВИДУАЛЬНЫЙ ПОШИВ И ПОДГОНКА
        </h2>

        <button className="btn btn-dark text-uppercase fw-bold catalog-btn rounded-0">
          Заказать пошив
        </button>
      </div>
      <p className="text-muted mb-4 text-start" style={{ maxWidth: "600" }}>
        Не нашли идеальный размер или хотите уникальный наряд? Мы создадим
        одежду по вашим меркам, учитывая все ваши пожелания..
      </p>
    </div>
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">

        <div className="carousel-item active"  style={{height:"600px"}}>
          <img src={bgHero2Img} className="d-block w-100  object-fit-cover" alt="..." />
        </div>
        <div className="carousel-item "  style={{height:"600px"}}>
          <img src={bgHero2Img} className="d-block w-100  object-fit-cover" alt="..." />
        </div>
        <div className="carousel-item "  style={{height:"600px"}}>
          <img src={bgHero2Img} className="d-block w-100  object-fit-cover" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Image Tile Grid */}

    <div className="container mt-5 pt-3">
      <div className="row g-3 ">
        <div className="col-12 col-md-6 col-lg-4  ">
          <div
            className="category-tile main-tile rounded-0"
            style={{ backgroundImage: `url(${categoryTiles[0].imageUrl})` }}
          >
            <div className="category-label fw-bold">Спецпредложение:</div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="category-tile main-tile rounded-0"
            style={{ backgroundImage: `url(${categoryTiles[1].imageUrl})` }}
          >
            <div className="category-label fw-bold">Спецпредложение:</div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column  justify-content-between rounded-0 gap-2 ">
          {/* Three smaller stacked tiles */}
          {categoryTiles.slice(1,4).map((tile, index) => (
            <div key={index} className="flex-fill  category-tile-wrap-sm ">
              <div
                className="category-tile small-tile rounded-0"
                style={{ backgroundImage: `url(${tile.imageUrl})` }}
              >
                <div className="category-label fw-bold">{tile.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)


export default TailoringSection
