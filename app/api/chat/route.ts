import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error('Missing NEXT_PUBLIC_GEMINI_API_KEY environment variable')
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY)

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const context = messages
      .map((m: { role: string; content: string }) => 
        `${m.role === 'user' ? 'Human' : 'Assistant'}: ${m.content}`
      )
      .join('\n')

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    })

    const result = await chat.sendMessage(`
      You are an AI assistant specialized in AgentIPY, Python, and the AgentiPy (APY) token, with a focus on Solana blockchain development.
      
      Previous conversation:
      ${context}
      
      Provide helpful responses about AgentIPY, its features, Python development, or general information about the AgentiPy (APY) token.
      For specific, up-to-date price or market data about AgentiPy (APY), inform the user that you don't have access to real-time market data and suggest checking a reliable cryptocurrency data provider.
      Use markdown formatting when appropriate, especially for code examples.
    `)

    const response = await result.response
    const text = response.text()

    return NextResponse.json({ 
      role: 'assistant',
      content: text 
    })
  } catch (error) {
    console.error('Error in POST handler:', error)
    return NextResponse.json({ 
      error: 'An error occurred while processing your request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

