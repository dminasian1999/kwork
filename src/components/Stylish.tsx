import React from "react"
import { ex4 } from "../utils/constants.ts"

const Stylish = () => (
  <div className=" " style={{ backgroundColor: "#39444A" }}>
    <div className="container ">
      <div className="row text-start">
        <div className="col-md-7">
          <div className=" stylist-block  text-start py-5">
            <div className="texe">
              <h2 className="text-white fw-medium mb-3">ПОДБОР ОТ СТИЛИСТА</h2>
              <p className="text-white-50 mb-4 " style={{ maxWidth: "400px",fontSize:'22px' }}>
                Вы всегда можете написать нам и подберем 3 лука за 10 минут
              </p>
              <p className="text-white-50 mb-4 " style={{ maxWidth: "400px",fontSize:'20px' }}>
                Вы всегда можете написать нам и подберем{" "}
              </p>
              <div className="text-light fw-bold text-decoration-underline mb-4 " style={{ maxWidth: "600px",fontSize:'24px' }}>
                3 лука за 10 минут              </div>
              <div className="btn btn-light btn-lg text-uppercase  hero-btn rounded-0 mt-3">  ЗАКАЗАТЬ СТИЛИСТА</div>

            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="bg-light  mt-5   text-start  bgl">
           <div className="mt-5 " style={{height:"450px"}}>
             <img className={'object-fit-cover h-100 w-100 mt-5 px-5' +
               ' '} src={ex4} alt={"hero"}/>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Stylish
