import React, { useEffect, useRef, useState } from "react"

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState("hero")
  const linksRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const linksEl = linksRef.current
    const indicator = indicatorRef.current
    if (!linksEl || !indicator) return

    const updateIndicator = () => {
      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 120
      let current = "hero"
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop) current = id
      })
      setActiveId(current)

      // Get all link elements
      const linkEls = linksEl.querySelectorAll("a")
      if (linkEls.length === 0) return

      const containerBox = linksEl.getBoundingClientRect()
      const activeIndex = LINKS.findIndex(l => l.id === current)
      const activeLink = linkEls[activeIndex] || linkEls[0]
      const activeLinkBox = activeLink.getBoundingClientRect()

      // Position indicator over the active link
      const padding = 6
      const width = activeLinkBox.width + padding * 2
      const x = activeLinkBox.left - containerBox.left - padding

      indicator.style.width = `${width}px`
      indicator.style.transform = `translateX(${x}px) translateY(-50%)`
      indicator.style.opacity = "1"
    }

    updateIndicator()
    window.addEventListener("scroll", updateIndicator, { passive: true })
    window.addEventListener("resize", updateIndicator)
    return () => {
      window.removeEventListener("scroll", updateIndicator)
      window.removeEventListener("resize", updateIndicator)
    }
  }, [])

  const handleScrollTo = (id) => (event) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveId(id)
    }
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#hero" onClick={handleScrollTo("hero")}>Portfolio</a>
        </div>
        <ul className="nav-links" ref={linksRef}>
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={handleScrollTo(id)}
                className={activeId === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
