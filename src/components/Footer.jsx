import { Link, useNavigate } from "react-router-dom"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import logo from "../assets/logo.png"

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (id) => {
    navigate("/")

    setTimeout(() => {
      const section = document.getElementById(id)
      section?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">

        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <img src={logo} alt="UNIMA Education Society" className="w-16" />
          <p className="max-w-xs text-white/90">
            The UNIMA Education Society promotes academic excellence, leadership,
            and professional growth among education students at the University of Malawi.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>

          <button
            onClick={() => handleScroll("home")}
            className="hover:text-accent transition"
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="hover:text-accent transition"
          >
            About
          </button>

          <button
            onClick={() => handleScroll("faqs")}
            className="hover:text-accent transition"
          >
            FAQs
          </button>

          <Link to="/login" className="hover:text-accent transition">
            Portal
          </Link>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p>Email: unimaeducationsociety@gmail.com</p>
          <p>Phone: +265 999 20 1128</p>

          <div className="flex gap-4 mt-2 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61561573440127"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>

            <a
              href="https://wa.me/265984304888"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-8 text-center py-4 text-white/70 text-sm">
        &copy; {new Date().getFullYear()} UNIMA Education Society. All rights reserved.
      </div>
    </footer>
  )
}
