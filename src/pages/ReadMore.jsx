import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../components/Navbar"

export default function ReadMore() {
  const navigate = useNavigate()

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const announcements = [
    {
      title: "Upcoming Education Symposium",
      date: "25 January 2026",
      description:
        "Join us for an insightful education symposium where future educators discuss innovation in teaching and learning.",
    },
    {
      title: "Teachers Council Updates",
      date: "18 January 2026",
      description:
        "Important updates regarding student indexing and teacher registration from the Teachers Council of Malawi.",
    },
    {
      title: "Community Outreach Program",
      date: "10 January 2026",
      description:
        "Our members participated in a school-based outreach to mentor primary school students.",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back icon */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-primary hover:text-primary/80"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          All Announcements
        </h1>

        {announcements.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {item.title}
            </h2>
            <p className="text-gray-500 mb-4">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
