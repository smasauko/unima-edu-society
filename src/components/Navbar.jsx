import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleScroll = (id) => {
    setOpen(false)
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById(id)
      section?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="UNIMA Education Society" className="w-10" />
          <span className="font-bold text-primary text-sm sm:text-base md:text-lg">
            UNIMA Education Society
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleScroll("home")}
            className="text-gray-700 hover:text-primary transition"
          >
            Home
          </button>

          <button
            onClick={() => handleScroll("about")}
            className="text-gray-700 hover:text-primary transition"
          >
            About
          </button>

          <button
            onClick={() => handleScroll("faqs")}
            className="text-gray-700 hover:text-primary transition"
          >
            FAQs
          </button>

          <Link
            to="/login"
            className="bg-accent text-white px-5 py-2 rounded-full hover:bg-accent/80 transition"
          >
            Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col items-center gap-6 text-center">
              <button
                onClick={() => handleScroll("home")}
                className="text-lg text-gray-700 hover:text-primary transition"
              >
                Home
              </button>

              <button
                onClick={() => handleScroll("about")}
                className="text-lg text-gray-700 hover:text-primary transition"
              >
                About
              </button>

              <button
                onClick={() => handleScroll("faqs")}
                className="text-gray-700 hover:text-primary transition"
              >
                FAQs
              </button>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/80 transition"
              >
                Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
