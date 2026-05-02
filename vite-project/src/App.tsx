import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero"
import About from "./sections/about/about"
import CaseStudy from "./sections/casestudy/casestudy"
import Pricing from "./sections/pricing/pricing"
import MoreInfo from "./sections/casestudy/more-info/more-info"
import Industry from "./sections/industry/industry"
import Stack from "./sections/stack/stack"
const App = () => {
  return (
    <>
      <MoreInfo />
      <Navbar />
      <Hero />
      <About />
      <CaseStudy />
      <Industry />
      <Stack />
      <Pricing />
    </>
  )
}

export default App