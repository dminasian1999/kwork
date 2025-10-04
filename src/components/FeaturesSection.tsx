import React from "react"
import { bagIcon, features } from "../utils/constants.ts"

const FeaturesSection = () => (
  <section className="container py-5 my-5">
    <div className="row text-center">
      {features.map((feature, index) => (
        // Use Bootstrap's flexbox for vertical alignment and wrapping
        <div key={index} className="col-12 col-md-4 col-lg-2-4 mb-4 mx-auto feature-item">
          <div className="feature-icon mb-3">
            <i  className={`icon anm ${feature.iconClass}`} style={{ fontSize: '30px' }}><img src={feature.iconClass}/></i>
          </div>
          <p className="fw-bold mb-1 feature-title">{feature.title}</p>
          <p className="text-muted feature-subtitle">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);


export default FeaturesSection
