import React, { useEffect } from "react"

// Served from the `public/` directory so the PDF has a deterministic,
// non-hashed URL. The browser embeds it inline instead of downloading it.
const RESUME_URL = "/Amr-Khalid-CV.pdf"

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="resume-page">
      <div className="resume-download">
        <a className="btn btn-primary" href={RESUME_URL} download>
          Download Resume
        </a>
      </div>
      <div className="resume-frame-wrap" id="resume-preview">
        <iframe
          className="resume-frame"
          title="Resume PDF preview"
          src={RESUME_URL}
        />
      </div>
    </section>
  )
}
