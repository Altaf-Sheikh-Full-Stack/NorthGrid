import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero"
import About from "./sections/about/about"
import CaseStudy from "./sections/casestudy/casestudy"
import Pricing from "./sections/pricing/pricing"
import MoreInfo from "./sections/casestudy/more-info/more-info"

const App = () => {
  return (
    <>
      <MoreInfo/>
      <Navbar />
      <Hero />
      <About />
      <CaseStudy />
      <Pricing />
    </>
  )
}

export default App