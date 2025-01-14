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

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
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
              A powerful toolkit for interacting with the Solana blockchain, providing easy-to-use functions for token operations, trading, and more.
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
        <section id="features" className="container px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🪙 Token Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transfer SOL and SPL tokens</li>
                  <li>Check token balances</li>
                  <li>Stake SOL</li>
                  <li>Deploy new tokens</li>
                  <li>Request faucet funds</li>
                  <li>Burn and close token accounts</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>💱 Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Jupiter Exchange integration</li>
                  <li>Token swaps with custom slippage</li>
                  <li>Direct routing options</li>
                  <li>Buy and sell with Raydium</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🏦 Yield Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lend idle assets to earn interest</li>
                  <li>Integrated with Lulo</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🔗 LangChain Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enhanced blockchain interactions</li>
                  <li>AI-powered tools</li>
                  <li>Automated workflows</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>📈 Performance Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time TPS monitoring</li>
                  <li>Token data fetching</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🚀 Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Launch Pump & Fun tokens</li>
                  <li>Create Meteora DLMM pools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Section */}
        <section id="quickstart" className="container px-4 py-16 bg-muted">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>Get started with AgentIPY in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code="pip install agentipy"
                language="bash"
              />
              <CodeBlock
                code={`from agentipy import SolanaAgentKit, create_solana_tools

# Initialize with private key and optional RPC URL
agent = SolanaAgentKit(
    "your-wallet-private-key-as-base58",
    "https://api.mainnet-beta.solana.com",
    "your-openai-api-key"
)

# Create LangChain tools
tools = create_solana_tools(agent)`}
                language="python"
              />
            </CardContent>
          </Card>
        </section>

        {/* Examples Section */}
        <section id="examples" className="container px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Examples</h2>
          <Tabs defaultValue="fetch-price" className="space-y-4">
            <TabsList>
              <TabsTrigger value="fetch-price">Fetch Price</TabsTrigger>
              <TabsTrigger value="swap-tokens">Swap Tokens</TabsTrigger>
              <TabsTrigger value="lend-tokens">Lend Tokens</TabsTrigger>
              <TabsTrigger value="stake-sol">Stake SOL</TabsTrigger>
            </TabsList>
            <TabsContent value="fetch-price">
              <Card>
                <CardHeader>
                  <CardTitle>Fetch Token Price</CardTitle>
                  <CardDescription>Get the current price of any Solana token</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`from agentipy import SolanaAgentKit

async def main():
    agent = SolanaAgentKit(
        "your-wallet-private-key-as-base58",
        "https://api.mainnet-beta.solana.com",
        "your-openai-api-key"
    )

    # Get balance
    balance = await agent.fetch_price("FKMKctiJnbZKL16pCmR7ig6bvjcMJffuUMbalance = await agent.fetch_price("FKMKctiJnbZKL16pCmR7ig6bvjcMJffuUMjB97YD7LJs")
    print(f"Price: {balance} SOL")

# Run the async function
import asyncio
asyncio.run(main())`}
                    language="python"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="swap-tokens">
              <Card>
                <CardHeader>
                  <CardTitle>Swap Tokens</CardTitle>
                  <CardDescription>Swap tokens using Jupiter Exchange integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`from agentipy import SolanaAgentKit
from solders.pubkey import Pubkey

async def main():
    agent = SolanaAgentKit(
        "your-wallet-private-key-as-base58",
        "https://api.mainnet-beta.solana.com",
        "your-openai-api-key"
    )

    signature = await agent.trade(
        agent,
        output_mint=Pubkey.from_string("target-token-mint"),
        input_amount=100,  # amount
        input_mint=Pubkey.from_string("source-token-mint"),
        slippage_bps=300  # 3% slippage
    )

import asyncio
asyncio.run(main())`}
                    language="python"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="lend-tokens">
              <Card>
                <CardHeader>
                  <CardTitle>Lend Tokens</CardTitle>
                  <CardDescription>Lend tokens to earn interest</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`from agentipy import SolanaAgentKit
from solders.pubkey import Pubkey

async def main():
    agent = SolanaAgentKit(
        "your-wallet-private-key-as-base58",
        "https://api.mainnet-beta.solana.com",
        "your-openai-api-key"
    )
    signature = await agent.lend_assets(
        amount=100  # amount
    )

import asyncio
asyncio.run(main())`}
                    language="python"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stake-sol">
              <Card>
                <CardHeader>
                  <CardTitle>Stake SOL</CardTitle>
                  <CardDescription>Stake SOL to earn rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`from agentipy import SolanaAgentKit

async def main():
    agent = SolanaAgentKit(
        "your-wallet-private-key-as-base58",
        "https://api.mainnet-beta.solana.com",
        "your-openai-api-key"
    )

    signature = await agent.stake(
        amount=1  # amount in SOL
    )

import asyncio
asyncio.run(main())`}
                    language="python"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* API Reference Section */}
        <section id="api" className="container px-4 py-16 bg-muted">
          <h2 className="text-3xl font-bold tracking-tight mb-8">API Reference</h2>
          <Card>
            <CardHeader>
              <CardTitle>Core Functions</CardTitle>
              <CardDescription>Complete list of available functions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Token Operations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>transfer(agent, to, amount, mint?)</li>
                    <li>get_balance(agent, token_address)</li>
                    <li>stake(agent, amount)</li>
                    <li>deploy_token(agent, decimals)</li>
                    <li>request_faucet_funds(agent)</li>
                    <li>burn_and_close_accounts(agent, token_account)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Trading</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>trade(agent, output_mint, input_amount, input_mint?, slippage_bps?)</li>
                    <li>buy_with_raydium(agent, pair_address, sol_in, slippage)</li>
                    <li>sell_with_raydium(agent, pair_address, percentage, slippage)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Yield Farming</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>lend_asset(agent, asset_mint, amount)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Performance & Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>get_tps(agent)</li>
                    <li>get_token_data_by_ticker(agent, ticker)</li>
                    <li>get_token_data_by_address(agent, mint)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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
  )
}

