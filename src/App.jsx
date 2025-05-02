import LiveAICoach from "./components/LiveAICoach"
import Navbar from "./components/Navbar"
import Course from "./sections/Course"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Testimonial from "./sections/Testimonial"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <LiveAICoach />
      <Course />
      <Faq />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
