import { useState } from 'react'

import { motion } from "motion/react"
import Hero from './components/Hero'
import AboutSection from './components/AboutUs'
import ProjectSection from './components/ProjectSection'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProjectSection/>
    <AboutSection/>
    </>

  )
}

export default App
