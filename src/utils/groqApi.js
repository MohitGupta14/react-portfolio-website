import { GROQ_API_KEY, GROQ_API_URL, MODEL } from '../config'
import { buildPortfolioContext } from './portfolioContext'

const SYSTEM_PROMPT = `You are an AI assistant embedded in Mohit Gupta's portfolio website.
Your job is to answer questions about Mohit's experience, skills, projects, and background
for recruiters and hiring managers.

Guidelines:
- Be concise and professional
- Pull specific details from the portfolio data when possible
- If you don't know something, say "This information isn't available in the portfolio"
- Speak as if you're introducing Mohit to a potential employer
- Keep answers under 3-4 sentences unless asked for detail
- Use a friendly but professional tone`

export const sendMessage = async (question, chatHistory = []) => {
  const context = buildPortfolioContext()

  const response = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT + '\n\nPORTFOLIO DATA:\n' + context },
        ...chatHistory,
        { role: 'user', content: question },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message || 'API request failed')
  }

  const data = await response.json()
  return data.choices[0].message.content
}
