'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from '@/components/code-block'
import { Chatbot } from '../components/chatbot'
import { Footer } from '../components/footer'
import { TokenInfo } from '@/components/token-info'
import { TPSTracker } from '@/components/tps-tracker'
import { TokenDataFetcher } from '@/components/token-data-fetcher'
import { YieldFarmingCalculator } from '@/components/yield-farming-calculator'
import { Features } from '@/components/features'
import { QuickStart } from '@/components/quick-start'
import { Examples } from '@/components/examples'
import { ApiReference } from '@/components/api-reference'
import { ClientWrapper } from '@/components/client-wrapper'

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <ClientWrapper>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="container px-4 py-20 md:py-32">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Solana Agent Kit
              </h1>
              <p className="mt-6 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                A powerful toolkit for interacting with the Solana blockchain, providing easy-to-use functions for token operations, trading, and more. Now integrated with LangChain for enhanced functionality.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open('https://github.com/niceberginc/agentipy', '_blank')}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsChatbotOpen(true)}
                >
                  Ask AI Assistant
                </Button>
              </div>
            </div>
          </section>

          {/* Dashboard Section */}
          <section className="container px-4 py-16">
            <h2 className="text-3xl font-bold tracking-tight mb-8">AgentIPY Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <TokenInfo />
              </div>
              <div className="col-span-1 md:col-span-2">
                <TPSTracker />
              </div>
              <TokenDataFetcher />
              <YieldFarmingCalculator />
            </div>
          </section>

          {/* Features Section */}
          <Features />

          {/* Quick Start Section */}
          <QuickStart />

          {/* Examples Section */}
          <Examples />

          {/* API Reference Section */}
          <ApiReference />

          {/* Chatbot */}
          {isChatbotOpen && <Chatbot />}
          <Button
            className="fixed bottom-4 right-4 z-10"
            onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          >
            {isChatbotOpen ? 'Close Assistant' : 'Ask AI Assistant'}
          </Button>
        </main>
        <Footer />
      </div>
    </ClientWrapper>
  )
}

