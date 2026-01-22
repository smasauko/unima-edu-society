import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Announcements from "./components/Announcements"
import ExecutiveMembers from "./components/ExecutiveMembers"
import Faqs from "./components/FAQs"
import Footer from "./components/Footer"
import Auth from "./pages/Auth"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Announcements />
      <ExecutiveMembers />
      <Faqs />
      <Footer />
    </>
  )
}
