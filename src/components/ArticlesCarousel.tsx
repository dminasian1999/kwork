import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { hero3Img, linkIcon } from "../utils/constants.ts"

const articles = [
  {
    meta: "Кейс • 3 сентября, 2025",
    title: "Наше партнерство с Microsoft: новые возможности для AI-аналитики",
    desc: "Как мы интегрировали решения Microsoft и помогли клиенту сократить время на подготовку данных.",
    link: "#",
  },
  {
    meta: "Кейс • 3 сентября, 2025",
    title: "Автоматизация закупок в FMCG: как мы снизили затраты на 27%",
    desc: "Описание решения и достигнутые KPI после автоматизации.",
    link: "#",
  },
  {
    meta: "Статья • 22 августа, 2025",
    title: "ИТ-архитектура: правила проектирования масштабируемых систем",
    desc: "Практики проектирования архитектуры для высокой доступности.",
    link: "#",
  },
]

const ArticlesCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1 },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-2xl font-bold text-alt-primary mb-6 text-start">
        Статьи, кейсы и события
      </h3>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        swipeable
        draggable
        showDots
        keyBoardControl
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="px-3"
      >
        {articles.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col h-full hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="img" style={{ height: "250px" }}>
              <img
                alt={"alt"}
                src={hero3Img}
                className="object-fit-cover h-100  w-100 "
              ></img>
            </div>

            <div className="d-flex align-items-center justify-content-between my-3">
              <div className="badge bg-primary-subtle text-primary fw-lighter ">
                Кейсы
              </div>
              <div className="text-sm text-gray-500 ">{item.meta}</div>
            </div>
            <p className="article-title font-semibold text-alt-primary mt-2">
              {item.title}
            </p>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            <div className="mt-auto text-start d-flex justify-content-between align-items-center">
              <a className="btn-outline" href={item.link}>
                Читать далее
              </a>
              <div className="icon">
                <img src={linkIcon} alt={"to"} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default ArticlesCarousel
