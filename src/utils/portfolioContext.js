import experienceData from '../data/experience.json'
import skillsData from '../data/skills.json'
import projectsData from '../data/projects.json'

export const buildPortfolioContext = () => {
  const experience = experienceData
    .map(
      (exp) =>
        `${exp.role} at ${exp.client || exp.company} (${exp.period})\n` +
        exp.highlights.map((h) => `  - ${h}`).join('\n') +
        `\n  Tech: ${exp.tags.join(', ')}`
    )
    .join('\n\n')

  const skills = skillsData.categories
    .map((cat) => `${cat.name}: ${cat.skills.map((s) => s.name).join(', ')}`)
    .join('\n')

  const projects = projectsData
    .map(
      (p) =>
        `${p.name} — ${p.description}\n` +
        `  Tech: ${p.tags.join(', ')}` +
        (p.github ? `\n  GitHub: ${p.github}` : '') +
        (p.live ? `\n  Live: ${p.live}` : '')
    )
    .join('\n\n')

  return `CANDIDATE: Mohit Gupta
TITLE: Full-Stack Software Engineer
LOCATION: Bengaluru, India (Open to Relocation)
EMAIL: mohitguptaofficial53@gmail.com
GITHUB: https://github.com/MohitGupta14
LINKEDIN: https://linkedin.com/in/mohit-gupta2121/

EXPERIENCE:
${experience}

SKILLS:
${skills}

PROJECTS:
${projects}

EDUCATION:
B.Tech in Computer Science, Jawaharlal Nehru University (2020-2024)

ACHIEVEMENTS:
- GSoC 2023 — Top 10% globally
- Led 200+ developer community
- 300+ DSA problems solved
- 15+ Pull Requests merged`
}
