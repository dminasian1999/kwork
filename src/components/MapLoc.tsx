import React from "react";
import { banner2, bannerBg } from "../utils/constants.ts";
import { Link } from "react-router-dom"

const MapLoc = () => {
  return (
    <section
      id="partners"
      className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "600px",
      }}
    >
      {/* Левый блок с текстом */}

      <div className="lg:w-1/2 bg-white/75 backdrop-blur-md p-8 flex flex-col justify-center align-items-center">
        <div className="badge bg-primary-subtle text-primary fw-lighter mb-4">Покажем пути к росту</div>

        <div className="text-2xl fw-bold h1 mb-2 text-center">Ваша ИТ-среда — точка роста или тормоз?</div>
        <p className=" text-center mt-3">
          Получите индивидуальный разбор архитектуры, интеграций и процессов —
          покажем, как усилить масштабируемость, отказоустойчивость и управляемость.
        </p>
        <Link
          to="/contact"
          className="fw-lighter text-decoration-none hidden sm:inline-block px-6 py-3 bg-alt-cta text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Получить консультацию        </Link>

      </div>

      {/* Правый блок с изображением */}
      <div className="lg:w-1/2 h-96 lg:h-auto overflow-hidden">
        <img
          src={banner2}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default MapLoc;
