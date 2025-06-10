import Projects from "./components/Projects"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import "./App.scss"

function App() {
  return (
    <div>
      <Hero />

      <main className="flex flex-col items-center bg-[#090a0f]">
        <Experience />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
