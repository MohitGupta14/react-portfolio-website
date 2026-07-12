import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAward,
  faUsers,
  faLaptopCode,
  faGraduationCap,
  faCalendar,
  faBuilding,
  faHeart,
  faPlane,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import experienceData from '../../data/experience.json'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const cubeIcons = [faNodeJs, faHtml5, faCss3, faReact, faJsSquare, faGithub, faPython, faJava]
  const cubeColors = ['#DD0031', '#F06529', '#28A4D9', '#5ED4F4', '#EFD81D', '#EC4D28', '#3776AB', '#f89820']

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <div className="about-intro">
            <p>
              Full-Stack Software Engineer with experience building AI-powered products,
              data pipelines, and scalable backend systems. Currently at BDI Plus working on
              conversational analytics and microservices architecture. Previously contributed to
              Google's Knowledge Graph and shipped open-source features through Google Summer of Code.
            </p>
          </div>

          <div className="experience-section">
            <h2 className="section-heading">
              <FontAwesomeIcon icon={faBuilding} className="heading-icon" />
              Work Experience
            </h2>
            {experienceData.map((exp) => (
              <div className="experience-item" key={exp.id}>
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                  {exp.client && <span className="exp-client">{exp.client}</span>}
                  <span className="exp-period">
                    <FontAwesomeIcon icon={faCalendar} />
                    {exp.period}
                  </span>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {exp.tags.map((tag, i) => (
                    <span className="exp-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="education-section">
            <h2 className="section-heading">
              <FontAwesomeIcon icon={faGraduationCap} className="heading-icon" />
              Education
            </h2>
            <div className="education-item">
              <h3>Bachelor of Technology in Computer Science</h3>
              <span className="edu-school">Jawaharlal Nehru University</span>
              <span className="edu-period">
                <FontAwesomeIcon icon={faCalendar} />
                2020 – 2024
              </span>
            </div>
          </div>

          <div className="achievements-section">
            <h2 className="section-heading">
              <FontAwesomeIcon icon={faAward} className="heading-icon" />
              Achievements
            </h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <FontAwesomeIcon icon={faAward} className="achievement-icon" />
                <div>
                  <strong>Google Summer of Code 2023</strong>
                  <p>Ranked among the top 10% of applicants globally</p>
                </div>
              </div>
              <div className="achievement-item">
                <FontAwesomeIcon icon={faUsers} className="achievement-icon" />
                <div>
                  <strong>Community Leader</strong>
                  <p>Led and managed a developer community of 200+ students at Loop, the campus Developer's Club</p>
                </div>
              </div>
              <div className="achievement-item">
                <FontAwesomeIcon icon={faLaptopCode} className="achievement-icon" />
                <div>
                  <strong>400+ DSA Problems</strong>
                  <p>Solved on LeetCode and Coding Ninjas with consistent competitive programming practice</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hobbies-section">
            <h2 className="section-heading">
              <FontAwesomeIcon icon={faHeart} className="heading-icon" />
              Hobbies
            </h2>
            <div className="hobbies-grid">
              <div className="hobby-item">
                <FontAwesomeIcon icon={faPlane} className="hobby-icon" />
                <div>
                  <strong>Travelling</strong>
                  <p>Exploring new places, cultures, and cuisines. Love road trips and offbeat destinations.</p>
                </div>
              </div>
              <div className="hobby-item">
                <FontAwesomeIcon icon={faCodeBranch} className="hobby-icon" />
                <div>
                  <strong>Open Source Contributing</strong>
                  <p>Actively contributing to open-source projects. Believer in building in public and giving back to the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {cubeIcons.map((icon, i) => (
              <div className={`face${i + 1}`} key={i}>
                <FontAwesomeIcon icon={icon} color={cubeColors[i]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
