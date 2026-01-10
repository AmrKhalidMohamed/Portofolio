import React, { useState, useEffect } from "react"
import projectsData from "../data/projects"
import heroImage from "../assets/hero.jpg"
import About from "./About"

// SVG Icons
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const AppleIcon = () => (
  <svg  width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
<path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
</svg>
)

const PlaystoreIcon = () => (
  <svg fill="currentColor" height="20" width="20" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" xml:space="preserve">
<g>
	<path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"/>
	<path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"/>
	<path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"/>
	<path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"/>
</g>
</svg>
)
const phrases = ["UI/UX designer.", "Back-end developer.", "Front-end developer.", "Full-stack developer."]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
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
    <>
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
              <a href="#about" className="btn btn-secondary">About Me</a>
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

      <section id="work" className="work-section">
        <h2>My Work</h2>
        <div className="projects">
          {projectsData.map((project) => (
            <article key={project.id} className="card">
              <div
                className="thumb"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.demoUrl && project.demoUrl !== "#" && (
                  <a
                    className="project-icon-link"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title= "View Demo"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {project.playstoreUrl && project.playstoreUrl !== "#" && (
                  <a
                    className="project-icon-link"
                    href={project.playstoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Play Store"
                  >
                    <PlaystoreIcon />
                  </a>
                )}
                {project.appStoreUrl && project.appStoreUrl !== "#" && (
                  <a
                    className="project-icon-link"
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="App Store"
                  >
                    <AppleIcon />
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    className="project-icon-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <About />
    </>
  )
}
