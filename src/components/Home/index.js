import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faNodeJs,
  faReact,
  faPython,
  faJsSquare,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faArrowDown,
  faBuilding,
  faCalendar,
  faAward,
  faUsers,
  faLaptopCode,
  faGraduationCap,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import experienceData from '../../data/experience.json'
import skillsData from '../../data/skills.json'
import projectsData from '../../data/projects.json'
import ChatWidget from '../ChatWidget'
import './index.scss'

const skillIconMap = {
  faCode: faLaptopCode,
  faServer: faNodeJs,
  faBrain: faLaptopCode,
  faDatabase: faLaptopCode,
  faStream: faLaptopCode,
  faCloud: faLaptopCode,
  faDesktop: faReact,
  faGraduationCap: faGraduationCap,
}

const topTech = [
  { name: 'Python', icon: faPython, color: '#3776AB' },
  { name: 'React', icon: faReact, color: '#5ED4F4' },
  { name: 'Node.js', icon: faNodeJs, color: '#DD0031' },
  { name: 'TypeScript', icon: faJsSquare, color: '#3178C6' },
  { name: 'Java', icon: faJava, color: '#f89820' },
  { name: 'Next.js', icon: faReact, color: '#fff' },
]

const Home = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.scroll-section').forEach((el) => {
      sectionObserver.observe(el)
    })

    if (!isMobile) {
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const children = entry.target.querySelectorAll('.stagger-child')
              children.forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`
                child.classList.add('stagger-visible')
              })
              staggerObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      )

      document.querySelectorAll('.stagger-group').forEach((el) => {
        staggerObserver.observe(el)
      })

      const heroContent = document.querySelector('.hero-center')
      const handleScroll = () => {
        if (!heroContent) return
        const scrollY = window.scrollY || document.querySelector('.single-page')?.scrollTop || 0
        const factor = Math.min(scrollY / 600, 1)
        heroContent.style.opacity = 1 - factor * 0.9
        heroContent.style.transform = `translateY(${scrollY * 0.35}px) scale(${1 - factor * 0.08})`
        heroContent.style.filter = `blur(${factor * 4}px)`
      }

      const scrollContainer = document.querySelector('.single-page')
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      }

      return () => {
        sectionObserver.disconnect()
        staggerObserver.disconnect()
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', handleScroll)
        }
      }
    }

    return () => sectionObserver.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const featuredProjects = projectsData.filter((p) => p.featured)
  const otherProjects = projectsData.filter((p) => !p.featured)

  return (
    <>
      <div className="single-page">
        {/* ─── HERO ─── */}
        <section id="hero" className="scroll-section hero-section">
          <div className="hero-particles">
            <span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span />
            <span /><span /><span /><span /><span />
          </div>
          <div className="hero-bg-orb orb-1" />
          <div className="hero-bg-orb orb-2" />
          <div className="hero-bg-orb orb-3" />

          <div className="hero-center">
            <div className="hero-badge">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <span>Open to Work</span>
            </div>

            <h1 className="hero-name">
              Mohit <span className="hero-name-accent">Gupta</span>
            </h1>

            <p className="hero-title">
              Full-Stack Software Engineer
            </p>
            <p className="hero-focus">
              AI <span className="hero-title-sep">·</span> Backend <span className="hero-title-sep">·</span> Cloud
            </p>

            <ChatWidget />

            <div className="hero-actions">
              <a href="mailto:mohitguptaofficial53@gmail.com" className="btn-primary">
                <FontAwesomeIcon icon={faEnvelope} />
                Get in Touch
              </a>
              <button className="btn-ghost" onClick={() => scrollTo('experience')}>
                <FontAwesomeIcon icon={faArrowDown} />
                View Experience
              </button>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="hero-stat-num">GSoC</span>
                <span className="hero-stat-label">'23 Alumni</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3+</span>
                <span className="hero-stat-label">Years</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">5+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Companies</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">400+</span>
                <span className="hero-stat-label">DSA Solved</span>
              </div>
            </div>

            <div className="hero-socials">
              <a href="https://linkedin.com/in/mohit-gupta2121/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/MohitGupta14" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/DarkMohit001" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>

            <div className="hero-tech-row">
              {topTech.map((t, i) => (
                <div className="hero-tech-chip" key={i}>
                  <FontAwesomeIcon icon={t.icon} style={{ color: t.color }} />
                  <span>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="scroll-section experience-section">
          <div className="section-label">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Experience</span>
          </div>
          <div className="timeline stagger-group">
            {experienceData.map((exp) => (
              <div className="timeline-item stagger-child" key={exp.id}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3>{exp.role}</h3>
                    <span className="company">{exp.company}</span>
                    {exp.client && <span className="client">{exp.client}</span>}
                  </div>
                  <span className="period">
                    <FontAwesomeIcon icon={faCalendar} /> {exp.period}
                  </span>
                  <ul className="highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {exp.tags.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="education-row">
            <FontAwesomeIcon icon={faGraduationCap} className="edu-icon" />
            <div>
              <strong>B.Tech in Computer Science</strong>
              <span>Jawaharlal Nehru University · 2020 – 2024</span>
            </div>
          </div>
          <div className="achievements-row stagger-group">
            <div className="achievement stagger-child">
              <FontAwesomeIcon icon={faAward} />
              <span>GSoC 2023 — Top 10% globally</span>
            </div>
            <div className="achievement stagger-child">
              <FontAwesomeIcon icon={faUsers} />
              <span>Led 200+ developer community</span>
            </div>
            <div className="achievement stagger-child">
              <FontAwesomeIcon icon={faLaptopCode} />
              <span>300+ DSA problems solved</span>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" className="scroll-section skills-section">
          <div className="section-label">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Skills</span>
          </div>
          <div className="skills-grid stagger-group">
            {skillsData.categories.map((cat, ci) => (
              <div className="skill-card stagger-child" key={ci}>
                <h3>
                  <FontAwesomeIcon icon={skillIconMap[cat.icon] || faLaptopCode} />
                  {cat.name}
                </h3>
                <div className="skill-pills">
                  {cat.skills.map((s, si) => (
                    <span className="pill" key={si}>{s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="scroll-section projects-section">
          <div className="section-label">
            <FontAwesomeIcon icon={faLaptopCode} />
            <span>Projects</span>
          </div>
          <div className="projects-featured stagger-group">
            {featuredProjects.map((p) => (
              <div className="project-card featured stagger-child" key={p.id}>
                <div className="project-top">
                  <span className="project-num">{String(p.id).padStart(2, '0')}</span>
                  <div className="project-links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                  </div>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul>
                  {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <div className="tags">
                  {p.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="projects-others stagger-group">
            {otherProjects.map((p) => (
              <div className="project-card stagger-child" key={p.id}>
                <div className="project-top">
                  <span className="project-num">{String(p.id).padStart(2, '0')}</span>
                  <div className="project-links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>}
                  </div>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="scroll-section contact-section">
          <div className="section-label">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </div>
          <div className="contact-content">
            <h2>Let's Work Together</h2>
            <p>I'm open to new opportunities and open to relocation. Let's build something great.</p>
            <a href="mailto:mohitguptaofficial53@gmail.com" className="btn-primary large">
              <FontAwesomeIcon icon={faEnvelope} />
              mohitguptaofficial53@gmail.com
            </a>
            <div className="contact-meta">
              <span><FontAwesomeIcon icon={faMapMarkerAlt} /> Bengaluru, India · Open to Relocation</span>
            </div>
            <div className="contact-socials">
              <a href="https://linkedin.com/in/mohit-gupta2121/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
              <a href="https://github.com/MohitGupta14" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
              <a href="https://twitter.com/DarkMohit001" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
