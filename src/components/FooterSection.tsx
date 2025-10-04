import React from "react"

import { hero3Img, subscriptionPrices } from "../utils/constants.ts"

const FooterSection = () => (
  // The background color for the contact/footer block
  <footer className="footer text-black pt-5 mt-5">
    <div className="container pt-5">

      <div className="row py-4"
           // style={{backgroundImage: hero3Img}}
      >
        <div className="col-md-3 mb-4">


          <h5 className="fw-bold">Каталог</h5>
          <ul className="list-unstyled footer-list">
            <li><a href="#" className="">Одежда</a></li>
            <li><a href="#" className="ext-white-50">Платья</a></li>
            <li><a href="#" className="ext-white-50">Костюмы</a></li>
            <li><a href="#" className="ext-white-50">Сумки</a></li>
            {/* ... more links */}
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h5 className="fw-bold">Меню</h5>
          <ul className="list-unstyled footer-list">
            <li><a href="#" className="=0">Каталог</a></li>
            <li><a href="#" className="=">Пошив</a></li>
            <li><a href="#" className="=">Образы</a></li>
            <li><a href="#" className="=">Контакты</a></li>
          </ul>
        </div>
        {/* Support & Subscription */}
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold">Поддержка</h5>
          <ul className="list-unstyled d-flex mb-3 footer-list">
            <li><a href="#" className="t=me-3">Доставка</a></li>
            <li><a href="#" className="t=">Оплата</a></li>
          </ul>

          <h5 className="fw-bold mt-4">Подписка на новости</h5>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Ваш email" aria-label="Ваш email" />
            <button className="btn btn-dark" type="button">→ </button>
          </div>
          <button className="btn btn-dark fw-bold text-uppercase mt-2">ПОДПИСАТЬСЯ</button>
        </div>
        <img className={'position-absolute end-50 object-fit-cover w-25 h-50'} src={hero3Img}/>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Footer Links and Subscription */}

      <div className="text-center py-3">
        <p className="text-white-50 mb-0">© 2025 LOOKS. Все права защищены.</p>
      </div>
    </div>
  </footer>
);


export default FooterSection
