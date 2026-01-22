import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MegaphoneIcon } from "@heroicons/react/24/outline"

import announcement1 from "../assets/announcement1.jpg"
import announcement2 from "../assets/announcement2.jpg"
import announcement3 from "../assets/announcement3.jpg"

export default function Announcements() {
  const headlines = [
    {
      title: "Upcoming Education Symposium",
      date: "25 January 2026",
      description:
        "Join us for an insightful education symposium where future educators discuss innovation in teaching and learning.",
      image: announcement1,
    },
    {
      title: "Teachers Council Updates",
      date: "18 January 2026",
      description:
        "Important updates regarding student indexing and teacher registration from the Teachers Council of Malawi.",
      image: announcement2,
    },
    {
      title: "Community Outreach Program",
      date: "10 January 2026",
      description:
        "Our members participated in a school-based outreach to mentor primary school students.",
      image: announcement3,
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length)
    }, 5000) // change every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="announcements"
      className="flex flex-col items-center justify-center bg-gray-50 px-6 py-20 min-h-[50vh] relative z-10"
    >
      {/* Section Title with Icon */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
        <MegaphoneIcon className="w-8 h-8 text-accent" />
        Latest Announcement
      </h2>

      {/* Rotating Card */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl"
      >
        {/* Image */}
        <img
          src={headlines[current].image}
          alt={headlines[current].title}
          className="w-full h-56 object-cover"
        />

        {/* Text Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            {headlines[current].title}
          </h3>
          <p className="text-gray-500 mb-4">{headlines[current].date}</p>
          <p className="text-gray-700 mb-6">
            {headlines[current].description.slice(0, 80)}...
          </p>
          <Link           
            to="/read-more"
            className="inline-block bg-accent text-white px-6 py-2 rounded-full hover:bg-accent/80 transition"
            >
            Read More
          </Link>

        </div>
      </motion.div>
    </section>
  )
}
