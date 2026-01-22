import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ReadMore from "./pages/ReadMore"
import Auth from "./pages/Auth"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
