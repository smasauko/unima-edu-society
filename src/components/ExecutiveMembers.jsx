import { motion } from "framer-motion"
import member1 from "../assets/member1.png"
import member2 from "../assets/member2.png"
import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"
import member5 from "../assets/member5.png"
import member6 from "../assets/member6.png"
import member7 from "../assets/member7.png"
import member8 from "../assets/member8.png"

const members = [
  { name: "Debora Funika Kabinda", position: "President", photo: member1 },
  { name: "Chisomo Nyirenda", position: "Vice President", photo: member2 },
  { name: "Elias Mwale", position: "Social Welfare", photo: member3 },
  { name: "Gift Banda", position: "Program Coordinator", photo: member8 },
  { name: "Mike Chirwa", position: "Deputy Programs Coordinator", photo: member4 },
  { name: "wangu Banda", position: "Publicity Secretary", photo: member6 },
  { name: "Mphatso Bwemba", position: "Vice publicity secretary", photo: member5 },
  { name: "Linda Mkandawire", position: "Vice General Secretary", photo: member7 },
]

export default function ExecutiveMembers() {
  return (
    <section id="executives" className="py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        Executive Members
      </h2>

      {/* Horizontal Scroll */}
      <div className="overflow-x-auto overflow-y-hidden custom-scrollbar px-6">
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
