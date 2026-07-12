import { useState, useRef, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTimes, faCommentDots, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { sendMessage } from '../../utils/groqApi'
import './index.scss'

const SUGGESTED_QUESTIONS = [
  "What's Mohit's experience?",
  'What technologies does he use?',
  'Tell me about his projects',
  'What are his achievements?',
]

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesContainerRef = useRef(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const getChatHistory = () => {
    return messages
      .filter((m) => !m.error)
      .map((m) => ({ role: m.role, content: m.content }))
  }

  const handleSend = async (question = inputValue) => {
    if (!question.trim() || isLoading) return

    const userMessage = { role: 'user', content: question.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await sendMessage(question, getChatHistory())
      const assistantMessage = { role: 'assistant', content: response }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', error: true },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const clearChat = () => {
    setMessages([])
  }

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <button className="chat-trigger" onClick={() => setIsOpen(true)}>
          <div className="trigger-glow" />
          <div className="trigger-inner">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="trigger-sparkle" />
            <span className="trigger-text">Ask me anything about Mohit</span>
            <span className="trigger-badge">AI</span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <div className="header-left">
              <FontAwesomeIcon icon={faCommentDots} />
              <span>AI Assistant</span>
            </div>
            <div className="header-actions">
              {messages.length > 0 && (
                <button className="clear-btn" onClick={clearChat} title="Clear chat">
                  Clear
                </button>
              )}
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          <div className="chat-messages" ref={messagesContainerRef}>
            {messages.length === 0 && (
              <div className="chat-welcome">
                <div className="welcome-avatar">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                <p className="welcome-text">
                  Hi! I'm Mohit's AI assistant. Ask me anything about his experience, skills, or
                  projects!
                </p>
                <div className="suggestions">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button key={i} className="suggestion-btn" onClick={() => handleSend(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}${msg.error ? ' error' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="bubble-avatar">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                )}
                <div className="bubble-text">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="chat-bubble assistant loading">
                <div className="bubble-avatar">
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={() => handleSend()}
              disabled={isLoading || !inputValue.trim()}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatWidget
