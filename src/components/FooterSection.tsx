import React from "react";
import { hero3Img } from "../utils/constants.ts";
import { Link } from "react-router-dom"

const FooterSection = () => {
  return (
    <footer className="position-relative">
      <div className="container">

        {/* Footer Grid */}
        <div className="row  pb-5 position-relative">

<div className="row my-5" >

  <div className="col-md-4 mb-4">
    <input type="text" className="form-control" placeholder="Ваше имя" />
  </div>
  <div className="col-md-4 mb-4">
    <input type="tel" className="form-control" placeholder="Телефон" />
  </div>
  <div className="col-md-4 mb-4">
    <Link
      to="/contact"
      className="text-center fw-lighter text-decoration-none hidden sm:inline-block px-6  bg-alt-cta text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 w-100 form-control"
    >
      Заказать обратный звонок       </Link>
  </div>
</div>
          {/* Услуги */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Услуги</h5>
            <ul className="list-unstyled text-secondary fw-light">
              <li className={"fw-lighter "}>Стратегический ИТ-консалтинг</li>
              <li>Аудит и оптимизация бизнес-процессов</li>
              <li>Корпоративная автоматизация на базе платформы 1С</li>
              <li>Digital HR: построение ИТ-команд</li>
              <li>ИТ-архитектура, отказоустойчивость и интеграции</li>
              <li>Корпоративная шина данных (ESB / Event Bus)</li>
              <li>Управление данными и аналитика (DWH/BI)</li>
            </ul>
          </div>

          {/* Разделы */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Разделы</h5>
            <ul className="list-unstyled text-secondary">
              <li>О компании</li>
              <li>Наши проекты</li>
              <li>Новости</li>
              <li>Контакты</li>
              <li>Отдел продаж</li>
              <li>Адрес офиса компании</li>
              <li>Режим работы: пн-пт 10:00-19:00</li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Контакты</h5>
            <ul className="list-unstyled mb-4 text-secondary">
              <li>Email: <a href="mailto:sales@alttech-lab.ru" className="text-white text-decoration-none">sales@alttech-lab.ru</a></li>
              <li>Телефон: +7 (909) 180-83-90</li>
              <li className="small">*Meta Platforms признана экстремистской организацией на территории РФ</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary"/>

        {/* Bottom Footer */}
        <div className="text-center py-3 text-white-50">
          © 2025 AltTech. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
