import React from "react"
import { rentalItems } from "../utils/constants.ts"

const RentalCatalogSection = () => (
  <section className="container py-5 my-5">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2
        className="catalog-title"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 500,          // Medium weight
          fontStyle: "normal",      // Medium isn’t valid, use normal/italic
          fontSize: "50px",
          lineHeight: "54px",
          letterSpacing: "4px",     // % not valid in React inline styles
          textTransform: "uppercase",
        }}
      >
        КАТАЛОГ АРЕНДЫ
      </h2>

      <button className="btn btn-dark text-uppercase fw-bold catalog-btn rounded-0">ПЕРЕЙТИ</button>
    </div>
    <p
      className="text-muted mb-5"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 400,           // Regular weight
        fontStyle: "normal",       // CSS only supports normal/italic/oblique
        fontSize: "22px",
        lineHeight: "34px",
        letterSpacing: "4px",      // % not supported, use px
      }}
    >
      Выбирайте одежду из тщательно подобранных коллекций. Платья, костюмы, верхняя одежда и аксессуары — всё, чтобы создать идеальный образ.    </p>


    <div className="row">
      {/* Use the first four items from the dummy data for the grid */}
      {rentalItems.slice(0, 4).map((item, index) => (
        <div key={index} className="col-6 col-md-4 mb-4 rental-item" style={{height:"500px"}}>
          {/* Placeholder for Product Image */}
          <img alt={'img'} src={item.img} className="product-img-placeholder mb-3 h-75 object-fit-cover w-100" >

            {/* In a real app, this would be an <img> tag */}
          </img>
          <h5 className="product-title">{item.title}</h5>
          <div className="d-flex product-price justify-content-between align-content-between">
            Цена покупки
            <div className="">{item.price}
            </div>
            </div>
          <div className="d-flex product-price justify-content-between mt-2">
            Цена аренды
            <div className="">{item.price}
            </div>
            </div>
          <div className="colors d-flex gap-2 mt-2">
            <div className="btn btn-warning rounded-0 btn-sm  p-2"/>
            <div className="btn btn-danger rounded-0 btn-sm "/>
          </div>
          <button className="btn btn-sm btn-dark w-100 mt-2 text-uppercase product-btn rounded-0 " style={{
            // fontWeight: 500,          // Medium weight
            fontStyle: "normal",      // Medium is handled by fontWeight
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "2px",     // % not valid
            textAlign: "center",
            textTransform: "uppercase",
            width: "81px",
          }}>в корзину</button>
        </div>
      ))}
    </div>

  </section>
);


export default RentalCatalogSection
