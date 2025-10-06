import React from "react";
import { art1, art2, art3, art4, art5, art6 } from "../utils/constants"; // убедись, что они там экспортированы

const services = [
  {
    image: art1,
    title: "Стратегический IT-консалтинг",
    desc: "Помогаем формировать цифровую стратегию, дорожные карты и архитектурные решения для роста и снижения затрат."
  },
  {
    image: art2,
    title: "Аудит и оптимизация бизнес-процессов",
    desc: "Выявляем узкие места и внедряем эффективные, масштабируемые процессы."
  },
  {
    image: art3,
    title: "Корпоративная автоматизация на базе платформы 1С",
    desc: "Внедряем и кастомизируем корпоративные системы для ключевых операций."
  },
  {
    image: art4,
    title: "Digital HR: построение ИТ-команд",
    desc: "Поддерживаем построение ИТ-команд, их организацию и процессы развития."
  },
  {
    image: art5,
    title: "ИТ-архитектура, отказоустойчивость и интеграции",
    desc: "Проектируем масштабируемую архитектуру, интеграции между системами и процессы обеспечения надежности."
  },
  {
    image: art6,
    title: "Управление данными и аналитика (DWH/BI)",
    desc: "Выстраиваем надежный поток данных, хранилища и аналитические панели для принятия решений в реальном времени."
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" aria-label="Услуги" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-alt-primary text-2xl mb-6">Комплексные решения для бизнеса</h3>

      <div className="services grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        {services.map((service, index) => (
          <article
            key={index}
            className="service-card bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            role="listitem"
          >
            <img src={service.image} alt={service.title} className="mb-4 rounded-xl" />
            <h4 className="text-xl font-bold text-alt-primary mb-2">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
