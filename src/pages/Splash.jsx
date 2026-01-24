import { motion } from "framer-motion"
import logo from "../assets/logo.png"

export default function Splash() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.img
        src={logo}
        alt="UNIMA Education Society Logo"
        className="w-40 h-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
