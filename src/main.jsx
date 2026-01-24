import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ReadMore from "./pages/ReadMore"
import Auth from "./pages/Auth"
import Splash from "./pages/Splash"

import Dashboard from "./admin/Dashboard"
import AnnouncementsAdmin from "./admin/AnnouncementsAdmin"
import ExecutivesAdmin from "./admin/ExecutivesAdmin"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

function Main() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <Splash />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/splash" element={<Splash />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/announcements" element={<AnnouncementsAdmin />} />
        <Route path="/admin/executives" element={<ExecutivesAdmin />} />

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
