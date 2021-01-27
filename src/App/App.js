import React from "react"
// Components
import Header from "../Header/Header"
import Work from "../Work/Work"
import About from "../About/about"
import Skills from "../Skills/skills"
// import Promotion from "../Promotion/Promotion"
import Footer from "../Footer/Footer"
import "../styles/mains.scss"
import Navbar from "../Navbar/Navbar"

function App() {
  return (
  <div className="root">
    <Navbar />
    <Header />
    <Work />
    <About />
    <Skills />
    <Footer />
  </div>
  );
}

export default App;
