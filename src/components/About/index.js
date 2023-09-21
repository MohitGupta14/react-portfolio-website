import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

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
          <div id="about-me">
            <span className="tag">
              &lt;/p&gt;
            </span>
            <p>I am a highly motivated Software Engineer with a passion for open source development.
             I am seeking a role as a Developer where I can contribute to challenging and diverse projects using the latest technologies.
             I am eager to learn and grow, and I am confident that I can make a significant contribution to your team.
           
            <span className="tag">
              &lt;p/&gt;
            </span></p>
            <div className="tag">
              &lt;/p&gt;
            </div>
            <p>I worked as a Software Engineer Intern at Google Summer of Code with Sugar Labs. During this internship, I managed to solve more than 15 issues, improved the UI, and used various APIs.</p>
            <p>My work at Google Summer of Code: <a href="https://github.com/sugarlabs/musicblocks/pulls?q=author%3AMohitGupta14">🗒️</a>
            <span className="tag">
              &lt;p/&gt;
            </span>
            </p>
          </div>
        </div>
           
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
