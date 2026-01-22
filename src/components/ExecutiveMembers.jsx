import { motion } from "framer-motion"
import member1 from "../assets/member1.jpg"
import member2 from "../assets/member2.jpg"
import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"

const members = [
  { name: "Funika", position: "President", photo: member1 },
  { name: "Evelyn Mwale", position: "Vice President", photo: member2 },
  { name: "Gift Banda", position: "General Secretary", photo: member3 },
  { name: "David Phiri", position: "Treasurer", photo: member4 },
]

export default function ExecutiveMembers() {
  return (
    <section id="executives" className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        Executive Members
      </h2>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto custom-scrollbar px-6">
        <div className="flex gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="min-w-[220px] md:min-w-[260px] bg-white rounded-xl shadow-lg flex-shrink-0"
            >
              {/* Clean Circular Image */}
              <div className="flex justify-center pt-6">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-gray-500">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
