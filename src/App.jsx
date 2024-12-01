import { useState } from 'react'

import { motion } from "motion/react"
import Hero from './components/Hero'
import AboutSection from './components/AboutUs'
import ProjectSection from './components/ProjectSection'
import Navbar from './components/Navbar'
import ContactSection from './components/Contact'
import ScrollSound from './components/ScrollSound'

function App() {
  
  return (
    <>
      <ScrollSound />
      <Navbar/>
      <Hero/>
      <ProjectSection/>
      <AboutSection/>
      <ContactSection/>
    </>

  )
}

export default App
