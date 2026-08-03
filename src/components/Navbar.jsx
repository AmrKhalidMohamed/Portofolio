import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
]

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [activeId, setActiveId] = useState("hero")
  const [menuOpen, setMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const linksRef = useRef(null)
  const indicatorRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  // Close the mobile menu when clicking/touching outside the navbar.
  useEffect(() => {
    if (!menuOpen) return
    const onDocClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) closeMenu()
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [menuOpen])

  // After landing on the home page via navigation (e.g. from /resume),
  // scroll to the requested section (or to the top for Home).
  useEffect(() => {
    if (pathname !== "/") return
    const id = hash ? hash.slice(1) : "hero"
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        window.scrollTo(0, 0)
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])

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
    closeMenu()
    // Sections only exist on the home page. From /resume (or /about) we
    // navigate home with the section hash and let the effect above scroll.
    if (pathname !== "/") {
      navigate(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveId(id)
    }
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" ref={navbarRef}>
        <div className="nav-brand">
          <a href="/" onClick={handleScrollTo("hero")}>Portfolio</a>
        </div>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          ref={linksRef}
        >
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={id === "hero" ? "/" : `/#${id}`}
                onClick={handleScrollTo(id)}
                className={activeId === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-only">
            <a className="nav-mobile-resume" href="/resume" onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ul>
        <Link className="nav-resume-cta" to="/resume" onClick={closeMenu}>
          Resume
        </Link>
      </nav>
    </div>
  )
}
