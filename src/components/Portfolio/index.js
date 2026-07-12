import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import projectsData from '../../data/projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const featuredProjects = projectsData.filter((p) => p.featured)
  const otherProjects = projectsData.filter((p) => !p.featured)

  const renderProjectCard = (project) => (
    <div className="project-card" key={project.id}>
      <div className="project-card-inner">
        <div className="project-header">
          <span className="project-number">
            {String(project.id).padStart(2, '0')}
          </span>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                title="Live Demo"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>

        <div className="featured-projects">
          {featuredProjects.map(renderProjectCard)}
        </div>

        <h2 className="other-projects-heading">Other Notable Projects</h2>
        <div className="other-projects">
          {otherProjects.map(renderProjectCard)}
        </div>

        <div className="stats">
          <a href="https://github.com/MohitGupta14" target="_blank" rel="noreferrer">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=MohitGupta14&theme=react-dark"
              alt="Mohit Gupta GitHub Activity Graph"
              className="activity-graph"
            />
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
