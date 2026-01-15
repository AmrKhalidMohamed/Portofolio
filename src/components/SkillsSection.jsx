import React from "react"
import StackIcon from "tech-stack-icons"

const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React Native", icon: "react" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Laravel", icon: "laravel" },
    { name: "MySQL", icon: "mysql" },
    { name: "REST APIs", icon: "rest" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "Figma", icon: "figma" },
  ],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skills-badges">
                {items.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    <StackIcon name={skill.icon} className="skill-icon" variant="dark" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
