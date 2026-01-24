import { useEffect, useState } from "react"
import { db, storage } from "../services/firebase"
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function AnnouncementsAdmin() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState(null)
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(false)

  const announcementsRef = collection(db, "announcements")

  // 🔄 Fetch announcements
  const fetchAnnouncements = async () => {
    const snapshot = await getDocs(announcementsRef)
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setAnnouncements(data)
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  // ➕ Add announcement
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return alert("Please select an image")

    try {
      setLoading(true)

      // Upload image
      const imageRef = ref(storage, `announcements/${Date.now()}-${image.name}`)
      await uploadBytes(imageRef, image)
      const imageUrl = await getDownloadURL(imageRef)

      // Save to Firestore
      await addDoc(announcementsRef, {
        title,
        description,
        date,
        imageUrl,
        createdAt: serverTimestamp()
      })

      // Reset form
      setTitle("")
      setDescription("")
      setDate("")
      setImage(null)

      fetchAnnouncements()
      alert("Announcement added ✅")
    } catch (err) {
      console.error(err)
      alert("Error adding announcement")
    } finally {
      setLoading(false)
    }
  }

  // ❌ Delete announcement
  const handleDelete = async (id) => {
    if (!confirm("Delete this announcement?")) return
    await deleteDoc(doc(db, "announcements", id))
    fetchAnnouncements()
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Announcements Admin</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Headline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Add Announcement"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-4">
        {announcements.map(item => (
          <div
            key={item.id}
            className="border rounded p-4 flex gap-4 items-start"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-sm">{item.description}</p>
            </div>

            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
