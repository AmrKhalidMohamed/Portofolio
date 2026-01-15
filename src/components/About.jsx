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
            <p>October the 6th university, 2020 – 2024</p>
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
            <a href="mailto:amrkfawzy@gmail.com">amrkfawzy@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+201556611228">+20 155 661 122 8</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/amr-k-fawzy-5a9222393" target="_blank" rel="noreferrer">
              linkedin.com/in/amr-k-fawzy-5a9222393
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
