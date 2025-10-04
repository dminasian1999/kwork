import React from "react"
import { ex4, icons, mapImg } from "../utils/constants.ts"

const MapLoc = () => (
  <div className=" " style={{ backgroundColor: "#39444A" }}>
    <div className="container ">
      <div className="row text-start">
        <div className="col-md-7">
          <div className=" stylist-block  text-start py-5">
            <div className="texe">
              <h2 className="text-white fw-medium mb-3"> Свяжитесь с нами</h2>

              <p
                className="text-white-50 mb-4 "
                style={{ maxWidth: "400px", fontSize: "20px" }}
              >
                Есть вопросы или хотите примерить наряд? Напишите нам или
                приходите в шоу-рум.{" "}
              </p>
              <div className="d-flex gap-5  alig-items-center">
                <div className="infos text-light fw-lighter  d-flex flex-column gap-3" >
                  <div className="">Адрес:</div>
                  <div className="">Телефон:</div>
                  <div className="">Email:</div>
                  <div className="">Соцсети:</div>
                </div>
                <div className="infos text-light  d-flex flex-column gap-3">
                  <div className="">г. Москва, ул. Примерная, 10</div>
                  <div className="">+7 (900) 400 - 00 - 00</div>
                  <div className="">info@mail.ru</div>
                  <div className="fa">
                    {icons.map((i, index) => (
                      <img className={'img h-75 px-2'} key={index} src={i.imageUrl} alt={i.label} />
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-5" >
          <div className="bg-light     text-start  bgl" >
            <div className="-5 " style={{ height: "450px" ,backgroundColor: "#39444A" }}>
              <img
                className={"object-fit-cover h-100 w-100 mt-5" + " "}
                src={mapImg}
                alt={"hero"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MapLoc
