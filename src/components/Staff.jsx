import { motion } from "framer-motion"
import hod from "../assets/staff.jpg" // replace with actual photo

export default function Staff() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Staff Representative
        </h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
        >
          {/* Photo */}
          <img
            src={hod}
            alt="Head of Department"
            className="w-40 h-40 rounded-full object-cover"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Dr. Peter Namphande
            </h3>
            <p className="text-accent font-medium mb-4">
              Dean of School of Education, University of Malawi
            </p>
            <p className="text-gray-700 leading-relaxed max-w-xl">
              The UNIMA Education Society works closely with the Department of
              Education to promote academic excellence, professional ethics,
              and leadership among future educators.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
