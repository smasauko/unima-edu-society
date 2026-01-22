import { motion } from "framer-motion"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"

export default function About() {
  const cards = [
    {
      title: "Our Background",
      description:
        "The UNIMA Education Society was established to unite education students under one academic and professional platform, complementing the University of Malawi’s mission.",
      image: about1,
    },
    {
      title: "Our Mission",
      description:
        "Through workshops, symposiums, and outreach activities, the Society equips members with both theoretical knowledge and practical skills relevant to the teaching profession.",
      image: about2,
    },
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
    >
      {/* Section Title with Heroicon */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center flex items-center gap-3">
        {/* <InformationCircleIcon className="w-8 h-8 text-accent" /> */}
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
