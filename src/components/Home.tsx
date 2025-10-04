import React from "react"
import Header from "./Header.tsx"
import HeroSection from "./HeroSection.tsx"
import FeaturesSection from "./FeaturesSection.tsx"
import RentalCatalogSection from "./RentalCatalogSection.tsx"
import TailoringSection from "./TailoringSection.tsx"
import FooterSection from "./FooterSection.tsx"
import Slideshow from "./Slideshow.tsx"
import Stylish from "./Stylish.tsx"
import ReadyCatalogSection from "./ReadyCatalogSection.tsx"
import MapLoc from "./MapLoc.tsx"

const HomePage = () => {

  return (
    <div className="">
      <main>
        <Slideshow/>
        {/*<HeroSection />*/}
        <FeaturesSection />
        <RentalCatalogSection />
        <TailoringSection />
        <Stylish/>
        <ReadyCatalogSection/>
        <MapLoc/>
      </main>
    </div>
  )
}

export default HomePage
