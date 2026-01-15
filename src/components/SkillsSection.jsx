import React from "react"
import {
  ReactIcon,
  JavaScriptIcon,
  TailwindIcon,
  NodeIcon,
  LaravelIcon,
  MySqlIcon,
  GitIcon,
  FigmaIcon,
  ReactNativeIcon,
  RestApiIcon,
} from "tech-stack-icons"

const skills = {
  frontend: [
    { name: "React", icon: ReactIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React Native", icon: ReactNativeIcon },
  ],
  backend: [
    { name: "Node.js", icon: NodeIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "REST APIs", icon: RestApiIcon },
  ],
  tools: [
    { name: "Git", icon: GitIcon },
    { name: "Figma", icon: FigmaIcon },
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
                {items.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name} className="skill-badge">
                      <Icon className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
