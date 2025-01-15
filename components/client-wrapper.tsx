'use client'

import { useState } from 'react'
import { Chatbot } from './chatbot'
import { Button } from "./ui/button"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <>
      {children}
      {isChatbotOpen && <Chatbot />}
      <Button
        className="fixed bottom-4 right-4 z-10"
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        {isChatbotOpen ? 'Close Assistant' : 'Ask AI Assistant'}
      </Button>
    </>
  )
}

