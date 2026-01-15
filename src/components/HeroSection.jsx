import React, { useState, useEffect } from "react"
import heroImage from "../assets/hero.jpg"

const phrases = ["UI/UX designer.", "Back-end developer.", "Front-end developer.", "Full-stack developer."]

export default function HeroSection({ scrollY }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const doneTyping = displayText === currentPhrase
    const doneDeleting = displayText === ""

    let nextText = displayText
    let nextDeleting = isDeleting
    let nextPhraseIndex = phraseIndex
    let delay = isDeleting ? 80 : 140
    let shouldUpdateText = true

    if (!isDeleting && !doneTyping) {
      nextText = currentPhrase.slice(0, displayText.length + 1)
    } else if (!isDeleting && doneTyping) {
      delay = 2000
      shouldUpdateText = false
      nextDeleting = true
    } else if (isDeleting && !doneDeleting) {
      nextText = currentPhrase.slice(0, displayText.length - 1)
      delay = 80
    } else if (isDeleting && doneDeleting) {
      delay = 300
      shouldUpdateText = false
      nextDeleting = false
      nextPhraseIndex = (phraseIndex + 1) % phrases.length
    }

    const id = setTimeout(() => {
      if (shouldUpdateText) {
        setDisplayText(nextText)
      }
      if (nextDeleting !== isDeleting) {
        setIsDeleting(nextDeleting)
      }
      if (nextPhraseIndex !== phraseIndex) {
        setPhraseIndex(nextPhraseIndex)
      }
    }, delay)

    return () => clearTimeout(id)
  }, [displayText, isDeleting, phraseIndex])

  const maxScroll = 400
  const progress = Math.min(scrollY / maxScroll, 1)
  const scale = 1 - progress * 0.3
  const opacity = 1 - progress * 0.6
  const translateY = progress * 50

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I am <span className="highlight">Amr Fawzy</span>
          </h1>
          <div className="hero-rotator" aria-live="polite">
            <span className="hero-phrase">{displayText}</span>
          </div>
          <p className="hero-description">
            I design and build modern web experiences. Passionate about creating
            clean, efficient code and user-friendly interfaces.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#about" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div
          className="hero-image"
          style={{
            transform: `scale(${scale}) translateY(-${translateY}px)`,
            opacity
          }}
        >
          <img src={heroImage} alt="Amr Fawzy" />
        </div>
      </div>
    </section>
  )
}
