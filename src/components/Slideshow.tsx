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
    <section className="container hero-section py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
            <span className="badge bg-light text-primary mb-3">
              Бесплатная консультация
            </span>
          <h2 className="fw-bold mb-3">
            Готовы построить ИТ-команду, которая реально работает?
          </h2>
          <p className="text-muted">
            Мы проведем первичный аудит вашей ИТ-команды и покажем, где
            теряются эффективность и деньги.
          </p>

          <form className="mt-4">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ваше имя"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Название компании"
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ваш E-Mail"
                />
              </div>
              <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Комментарий"
                  ></textarea>
              </div>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyCheck"
              />
              <label
                className="form-check-label small text-muted"
                htmlFor="privacyCheck"
              >
                Нажимая на кнопку, Вы соглашаетесь с{" "}
                <a href="#">Политикой конфиденциальности</a>
              </label>
            </div>

            <button type="button" className="btn btn-warning mt-3 px-4">
              Отправить
            </button>
          </form>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="/laptop.png"
            alt="Laptop preview"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>

  );
};

export default Slideshow;
