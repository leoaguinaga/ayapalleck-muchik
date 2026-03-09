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
    <div className="flex flex-col bg-card scrollbar-hide">
      <style dangerouslySetInnerHTML={{
        __html: `
        body, html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Modules />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}