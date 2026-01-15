import React, { useState, useEffect } from "react"
import HeroSection from "../components/HeroSection"
import WorkSection from "../components/WorkSection"
import SkillsSection from "../components/SkillsSection"
import About from "../components/About"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <HeroSection scrollY={scrollY} />
      <WorkSection />
      <SkillsSection />
      <About />
    </>
  )
}
