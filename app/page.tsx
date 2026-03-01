import Features from "./components/features"
import Header from "./components/header"
import Hero from "./components/hero"
import HowItWorks from "./components/how-it-works"
import CTA from "./components/cta"
import Modules from "./components/modules"
import Pricing from "./components/pricing"
import Footer from "./components/footer"
import Testimonials from "./components/testimonials"

export default function LandingPage() {

  return (
    <div className="flex flex-col bg-card">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Modules />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}