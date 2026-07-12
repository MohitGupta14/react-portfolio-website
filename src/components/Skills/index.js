import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import skillsData from '../../data/skills.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faServer,
  faBrain,
  faDatabase,
  faStream,
  faCloud,
  faDesktop,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const iconMap = {
  faCode,
  faServer,
  faBrain,
  faDatabase,
  faStream,
  faCloud,
  faDesktop,
  faGraduationCap,
}

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Skills'.split('')}
            idx={15}
          />
        </h1>
        <p className="skills-intro">
          A comprehensive overview of my technical skill set across the full stack,
          AI/ML, cloud infrastructure, and core computer science.
        </p>
        <div className="skills-grid">
          {skillsData.categories.map((category, catIdx) => (
            <div className="skill-category" key={catIdx}>
              <div className="category-header">
                <FontAwesomeIcon
                  icon={iconMap[category.icon] || faCode}
                  className="category-icon"
                />
                <h2>{category.name}</h2>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div className="skill-item" key={skillIdx}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(catIdx * 0.1) + (skillIdx * 0.05)}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
