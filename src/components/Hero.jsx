import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

import group1 from "../assets/group1.jpg"
import group2 from "../assets/group2.jpg"
import group3 from "../assets/group3.jpg"

const images = [group1, group2, group3]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 overflow-hidden"
    >
      {/* Sliding Background */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay (BOTTOM HEAVY) */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 via-30% to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 text-white"
      >
        <img
          src={logo}
          alt="UNIMA Education Society"
          className="w-36 mb-6"
        />

        <h1 className="text-3xl text-white/88 md:text-5xl font-bold mb-4">
          Welcome to UNIMA Education Society
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-white/90">
          The UNIMA Education Society is an academic student society under the
          University of Malawi, promoting academic excellence, professional
          development, leadership, and collaboration among future educators.
        </p>

        {/* Join Us Button */}
        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/login"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold
                       hover:bg-accent/80 transition-all duration-300 inline-block
                       shadow-lg hover:shadow-xl"
          >
            Join Us
          </Link>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex gap-3 mt-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
