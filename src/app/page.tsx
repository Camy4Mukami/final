import Navbar from '@/components/layout/Navigation'
import HeroSection from '@/components/layout/HeroSection'
import AboutUs from '@/components/layout/AboutUs'
import WhyUs from '@/components/layout/WhyUs'

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero section with full background image */}
      <HeroSection />
      
      {/* Navbar positioned on top with z-index */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* About Us section */}
      <AboutUs />
      <WhyUs />
    </div>
  )
}

export default Page