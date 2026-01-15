import React from "react"

const skills = {
  frontend: [
    { name: "React", icon: "" },
    { name: "Tailwind CSS", icon: "" },
    { name: "JavaScript", icon: "" },
    { name: "React Native", icon: "" },
  ],
  backend: [
    { name: "Node.js", icon: "" },
    { name: "Laravel", icon: "" },
    { name: "MySQL", icon: "" },
    { name: "REST APIs", icon: "" },
  ],
  tools: [
    { name: "Git", icon: "" },
    { name: "Figma", icon: "" },
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
                    <span className="skill-icon">{skill.icon}</span>
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
