import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <Link
          to="/admin/announcements"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-primary">
            Manage Announcements
          </h2>
          <p className="text-gray-600 mt-2">
            Add, edit or remove announcements
          </p>
        </Link>

        <Link
          to="/admin/executives"
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-primary">
            Manage Executive Members
          </h2>
          <p className="text-gray-600 mt-2">
            Add, edit or remove executives
          </p>
        </Link>
      </div>
    </div>
  )
}
