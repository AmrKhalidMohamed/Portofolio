import React from "react"

// Served from the `public/` directory so the PDF has a deterministic,
// non-hashed URL. The browser embeds it inline instead of downloading it.
const RESUME_URL = "/Amr-Khalid-CV.pdf"

export default function Resume() {
  return (
    <section className="resume-page">
      <div className="resume-shell">
        <div className="resume-copy">
          <p className="resume-eyebrow">Resume</p>
          <h1>View the PDF version of my resume.</h1>
          <p>
            The PDF is embedded below for quick viewing, and you can still
            download a copy from the action bar.
          </p>
          <div className="resume-actions">
            <a className="btn btn-primary" href="#resume-preview">
              Jump to Preview
            </a>
            <a className="btn btn-secondary" href={RESUME_URL} download>
              Download
            </a>
          </div>
        </div>
        <div className="resume-frame-wrap" id="resume-preview">
          <iframe
            className="resume-frame"
            title="Resume PDF preview"
            src={RESUME_URL}
          />
        </div>
      </div>
    </section>
  )
}
