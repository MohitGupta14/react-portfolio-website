# Mohit Gupta — Portfolio

Modern single-page portfolio with an integrated AI chatbot that answers questions about Mohit using portfolio data, powered by Groq API.

## Tech Stack

- React 17 + SCSS
- Groq API (LLaMA 3.3 70B) for AI chatbot
- Font Awesome icons
- Single-page scroll layout

## Features

- **AI Chatbot** — answers questions about Mohit's experience, skills, and projects using Groq API with portfolio context
- **Single-page scroll** — Hero, Experience, Skills, Projects, Contact
- **Horizontal top navbar** with profile photo
- **Responsive** — mobile hamburger menu, adaptive layouts
- **Smooth scroll animations** via IntersectionObserver

## Local Setup

```bash
npm install
cp .env.example .env
# Add your Groq API key to .env
npm start
```

## Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_GROQ_API_KEY` | Groq API key (get one at console.groq.com) |

## Vercel Deployment

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo
3. Vercel auto-detects React — **no framework preset change needed**
4. In **Environment Variables**, add:
   - `REACT_APP_GROQ_API_KEY` — your Groq API key
5. Deploy

> **Important:** Vercel needs the env var set _before_ build. CRA embeds `REACT_APP_*` vars at build time. If the chatbot returns errors after deploy, re-trigger a deploy after adding the env var.
