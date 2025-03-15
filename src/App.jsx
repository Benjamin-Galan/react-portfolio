"use client"

import { useState } from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1a1f2c] text-white" : "bg-gray-100 text-gray-900"}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8 max-w-[1000px]">
        <Header />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

