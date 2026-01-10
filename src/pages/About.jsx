import React from 'react'

export default function About() {
  return (
    <section id="about" className="about-page">
      <h1>About Me</h1>

      <div className="about-section">
        <h2>Education</h2>
        <ul className="education-list">
          <li>
            <strong>Bachelor of Science in Computer Science</strong>
            <p>University Name, 2018 – 2022</p>
          </li>
          <li>
            <strong>High School Diploma</strong>
            <p>High School Name, 2014 – 2018</p>
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+201556611228">+20 155 661 122 8</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              linkedin.com/in/yourprofile
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/AmrKhalidMohamed" target="_blank" rel="noreferrer">
              github.com/AmrKhalidMohamed
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
