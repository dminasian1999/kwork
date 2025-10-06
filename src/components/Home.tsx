import React from "react"
import HeroSection from "./HeroSection.tsx"
import FeaturesSection from "./FeaturesSection.tsx"
import TailoringSection from "./TailoringSection.tsx"
import TestimonialsCarousel from "./TestimonialsCarousel.tsx"
import MapLoc from "./MapLoc.tsx"
import PartnerSection from "./PartnerSection.tsx"
import WeeklyBestseller from "./WeeklyBestseller.tsx"
import ArticlesCarousel from "./ArticlesCarousel.tsx"

const HomePage = () => {
  return (
    <div className="">
      <main>
        {/*<Slideshow/>*/}
        <HeroSection />
        <FeaturesSection />
        <PartnerSection />
        <TailoringSection />
        <WeeklyBestseller />
        <TestimonialsCarousel />
        <MapLoc />

        <ArticlesCarousel />
      </main>
    </div>
  )
}

export default HomePage
