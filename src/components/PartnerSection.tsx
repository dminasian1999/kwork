import React from "react"
import { artLogo, partnerSectionValues } from "../utils/constants.ts"

const PartnerSection = () => {
  return (
    <section
      id="partner"
      aria-label="Почему мы партнёр"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="section-header text-center mb-12 text-alt-primary">
        Что делает нас партнёром, а не исполнителем?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnerSectionValues.slice(0, 4).map((item, idx) => (
          <div
            key={idx}
            className="bg-primary  p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 value-prop-card"
          >
            <p className="text-lg text-light font-semibold text-alt-primary">
              {item.title}
            </p>
            <p className=" text-light fw-lighter text-gray-600 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
        <div className="bg-transparent   hover:shadow-xl transition transform hover:-translate-y-1 value-prop-card">
          <img src={artLogo} alt={"art"} />
        </div>
        {partnerSectionValues.slice(4, 8).map((item, idx) => (
          <div
            key={idx}
            className="bg-primary  p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 value-prop-card"
          >
            <p className="text-lg text-light font-semibold text-alt-primary">
              {item.title}
            </p>
            <p className=" text-light fw-lighter text-gray-600 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default PartnerSection
