import Destinations from "./Destinations/Destinations"
import HeroSection from "./HeroSection/HeroSection"
import PopularPrograms from "./PopularPrograms/PopularPrograms"
import QuickCTA from "./QuickCTA/QuickCTA"
import QuickOverviewServices from "./QuickOverviewServices/QuickOverviewServices"
import TestimonialsSlider from "./TestimonialsSlider/TestimonialsSlider"

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Destinations />
      <PopularPrograms />
      <QuickOverviewServices />
      <TestimonialsSlider />
      <QuickCTA />
    </div>
  )
}

export default HomePage