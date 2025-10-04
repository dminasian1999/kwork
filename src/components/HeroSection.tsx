import React from "react"

const HeroSection = () => (
  // Added 'hero-section' class for background image and overlay styling
  <section className="hero-section d-flex align-items-center">
    <div className="container" style={{ zIndex: 1 }}>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="hero-title display-4 fw-bolder mb-4">
            СТИЛЬНАЯ ОДЕЖДА ДЛЯ ЛЮБОГО СОБЫТИЯ!
          </h1>
          <p className="hero-subtitle mb-5">
            Арендуйте модные наряды на свадьбу, вечеринку или фотосессию.
            Премиум стиль, доступный каждому
          </p>
          <button className="btn btn-light btn-lg text-uppercase fw-bold hero-btn">
            ПОСМОТРЕТЬ КАТАЛОГ
          </button>
        </div>
        {/* The model image is handled by the CSS background or a separate absolute positioned image */}
      </div>
    </div>
  </section>
);


export default HeroSection
