import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../assets/logo.png"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        {/* Title */}
        <div className="text-center mb-2">
          <img
            src={logo}
            alt="UNIMA Education Society"
            className="w-24 mx-auto"
          />
        </div>
        <p className="text-gray-600 text-center mb-8">
          {isLogin ? "Sign in to start your session" : "Create an Account"}
        </p>

        {/* Form */}
        <form className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Spencer Masauko"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="bed-com-01-23@unima.ac.mw"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/80 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm">
          {isLogin ? (
            <>
              <span className="text-gray-600">Don’t have an account?</span>{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-accent font-semibold hover:underline"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already a member?</span>{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-accent font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Back Home */}
        <div className="text-center mt-4">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
