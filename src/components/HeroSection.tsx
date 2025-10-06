import React from "react"
import { hero22Img, hero2Img } from "../utils/constants.ts"

const HeroSection = () => {
  return (
    <section className="bg-white">
      {" "}
      <img
        src={hero22Img}
        alt="Business meeting with charts showing growth"
        className="rounded-2xl mb-4 w-full h-auto object-cover"
      />
      {/* Assuming a white background for the section based on the image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-24 lg:pb-32">
          {/* Left Content Area */}{" "}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.4rem] font-extrabold leading-tight text-gray-900">
              Увеличиваем{" "}
              <span className="text-orange-500">маржинальность бизнеса</span>{" "}
              через цифровые инновации
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Мы — ИТ-компания нового типа: не просто проектные интеграторы и
              разработчики, а архитекторы цифровых трансформаций, которые
              работают на стыке бизнеса, технологий и команд.
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection
