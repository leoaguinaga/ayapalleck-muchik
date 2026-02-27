"use client"

import Features from "./components/features"
import CTA from "./components/cta"
import Header from "./components/header"
import Hero from "./components/hero"
import HowItWorks from "./components/how-it-works"
import Modules from "./components/modules"
import Footer from "./components/footer"

export default function LandingPage() {
  // const { data: session } = authClient.useSession()

  // if (session?.user) {
  //   redirect("/dashboard")
  // }

  return (
    <div className="flex flex-col bg-card">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Modules />
      <Footer />
    </div>
  )
}