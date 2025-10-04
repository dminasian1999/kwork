import React from "react"
import { readyItems, rentalItems } from "../utils/constants.ts"

const ReadyCatalogSection = () => (
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
        Готовые образы для любого события
      </h2>

      <button className="btn btn-dark text-uppercase fw-bold catalog-btn rounded-0">Посмотреть образы</button>
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
      Вдохновляйтесь нашими готовыми образами или создайте собственный. Идеально подобранные сочетания одежды и аксессуаров помогут выглядеть безупречно.   </p>


    <div className="row p-5">
      {readyItems.slice(0, 4).map((item, index) => (
        <div key={index} className="col-6 col-md-4 mb-4 rental-item" style={{height:"500px"}}>
          {/* Placeholder for Product Image */}
          <img alt={'img'} src={item.img} className=" product-img-placeholder mb-3 h-75 object-fit-cover w-100" >

            {/* In a real app, this would be an <img> tag */}
          </img>
          <h5 className="product-title">{item.title}</h5>
          <div style={{fontSize:'24px',fontWeight: "600"}} className="d-flex  justify-content-between align-content-between">
            Цена
            <div className="">{item.price}
            </div>
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
          }}>Арендовать</button>
        </div>
      ))}
      {readyItems.slice(0, 4).map((item, index) => (
        <div key={index} className="col-6 col-md-4 mb-4 rental-item" style={{height:"500px"}}>
          {/* Placeholder for Product Image */}
          <img alt={'img'} src={item.img} className="product-img-placeholder mb-3 h-75 object-fit-cover w-100" >

            {/* In a real app, this would be an <img> tag */}
          </img>
          <h5 className="product-title">{item.title}</h5>
          <div style={{fontSize:'24px',fontWeight: "600"}} className="d-flex  justify-content-between align-content-between">
            Цена
            <div className="">{item.price}
            </div>
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
          }}>Арендовать</button>
        </div>
      ))}
    </div>

  </section>
);


export default ReadyCatalogSection
