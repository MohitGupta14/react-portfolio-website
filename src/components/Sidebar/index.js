import './index.scss'
import { useState } from 'react'
import Photo from '../../assets/images/myimage.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { id: 'hero', icon: faHome, label: 'HOME' },
  { id: 'experience', icon: faUser, label: 'EXPERIENCE' },
  { id: 'skills', icon: faLaptopCode, label: 'SKILLS' },
  { id: 'projects', icon: faSuitcase, label: 'PROJECTS' },
  { id: 'contact', icon: faEnvelope, label: 'CONTACT' },
]

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleNav = (id) => {
    setShowNav(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="nav-bar">
      <div className="nav-top">
        <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); handleNav('hero') }}>
          <img src={Photo} alt="Mohit Gupta" />
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`${item.id}-link`}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNav(item.id) }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ul className="desktop-socials">
          <li>
            <a href="https://linkedin.com/in/mohit-gupta2121/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/MohitGupta14" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DarkMohit001" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>

        <FontAwesomeIcon
          onClick={() => setShowNav(!showNav)}
          icon={showNav ? faClose : faBars}
          className="hamburger-icon"
        />
      </div>

      <nav className={`mobile-nav ${showNav ? 'mobile-show' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`${item.id}-link`}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); handleNav(item.id) }}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
