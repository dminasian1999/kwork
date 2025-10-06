import React from "react"
import { usImg } from "../utils/constants.ts"

const TailoringSection = () => {
  const bullets = [
    {
      icon: "10+",
      title: "Более 10 лет на рынке",
      desc: "Опыт в проектах по интеграции и цифровой трансформации, успешные внедрения более 50 проектов.",
    },
    {
      icon: "✔",
      title: "Фокус на бизнес-метриках",
      desc: "Планируем решения под KPI бизнеса — рост маржи, снижение TCO и time-to-market.",
    },
    {
      icon: "🏅",
      title: "Экспертность и сертификация",
      desc: "Команда сертифицированных архитекторов и инженеров, опыт работы с крупными данными.",
    },
  ]

  const partners = ["Microsoft", "Snowflake", "DB"]

  return (
    <section
      id="about"
      aria-label="Почему клиенты выбирают нас"
      className="container row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-2xl shadow-md my-12"
    >

      <div className="col-md-6">
        <h3 className="text-start ">
          Почему клиенты выбирают нас?
        </h3>
        <div className="grid lg:grid-cols-2  items-start mt-5">

          <div className="space-y-6" role="list">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-start" role="listitem">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-alt-cta text-white font-bold text-lg rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h6 className="font-semibold text-alt-primary">
                    {item.title}
                  </h6>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img className={'rounded-4'} src={usImg} alt={"us"} />
      </div>
    </section>
  )
}

export default TailoringSection
