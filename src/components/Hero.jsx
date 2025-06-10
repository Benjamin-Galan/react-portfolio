import Navbar from "./Navbar"
import Principal from "./Principal"

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="stars"></div>
      <div className="content">
        <Navbar />
        <Principal />
      </div>
    </div>
  )
}
