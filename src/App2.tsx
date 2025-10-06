import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./LandingPage.css"; // optional extra styling

const App = () => {
  return (
    <div className="landing-page">
      {/* HEADER */}

      {/* HERO SECTION */}


      {/* MID SECTION */}


      {/* PROJECTS SECTION */}
      <section className="container py-5">
        <h3 className="fw-bold mb-4">Реализованные проекты</h3>
        <div className="row g-4">
          {[1, 2, 3].map((n) => (
            <div className="col-md-4" key={n}>
              <div className="card text-center shadow-sm border-0 p-3">
                <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                  +20% рост продуктивности
                </span>
                <img
                  src="/1c-logo.png"
                  alt="1C Project"
                  className="img-fluid mx-auto mt-4"
                  style={{ height: "80px" }}
                />
                <div className="card-body">
                  <p className="text-muted mb-0">
                    Завод, 600 сотрудников. Внедрение ИТ. Выручка 2 млрд ₽/год
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-light py-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <h5>Услуги</h5>
              <ul className="list-unstyled text-muted">
                <li>Стратегический ИТ-консалтинг</li>
                <li>Аудит и оптимизация бизнес-процессов</li>
                <li>Корпоративная автоматизация</li>
                <li>Digital HR: построение ИТ-команд</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Разделы</h5>
              <ul className="list-unstyled text-muted">
                <li>О компании</li>
                <li>Наши проекты</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Контакты</h5>
              <p className="mb-1 small">sales@alttech-lab.ru</p>
              <p className="mb-1 small">+7 (909) 180-83-99</p>
              <p className="mb-0 small">Пн–Пт: 10:00–19:00</p>
            </div>
          </div>
          <hr />
          <p className="text-center small text-muted mb-0">
            © 2025 ООО “Альт Тех Лаб”
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
