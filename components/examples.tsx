import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from '@/components/code-block'

export function Examples() {
  return (
    <section id="examples" className="container px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Examples</h2>
      <Tabs defaultValue="fetch-price" className="space-y-4">
        <TabsList>
          <TabsTrigger value="fetch-price">Fetch Price</TabsTrigger>
          <TabsTrigger value="swap-tokens">Swap Tokens</TabsTrigger>
          <TabsTrigger value="lend-tokens">Lend Tokens</TabsTrigger>
          <TabsTrigger value="stake-sol">Stake SOL</TabsTrigger>
          <TabsTrigger value="raydium-buy">Buy with Raydium</TabsTrigger>
          <TabsTrigger value="raydium-sell">Sell with Raydium</TabsTrigger>
          <TabsTrigger value="burn-close">Burn & Close</TabsTrigger>
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
    balance = await agent.fetch_price("FKMKctiJnbZKL16pCmR7ig6bvjcMJffuUMjB97YD7LJs")
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
        <TabsContent value="raydium-buy">
          <Card>
            <CardHeader>
              <CardTitle>Buy with Raydium</CardTitle>
              <CardDescription>Buy tokens using Raydium liquidity pools</CardDescription>
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

    confirmed = await agent.buy_with_raydium(
        pair_address=Pubkey.from_string("target-pair-address"),  # The pair you want to buy from
        sol_in=1,  # Amount of SOL or input token to spend
        slippage=300  # Maximum slippage in basis points (3% here)
    )
    print(f"Transaction confirmed: {confirmed}")

import asyncio
asyncio.run(main())`}
                language="python"
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="raydium-sell">
          <Card>
            <CardHeader>
              <CardTitle>Sell with Raydium</CardTitle>
              <CardDescription>Sell tokens using Raydium liquidity pools</CardDescription>
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

    confirmed = await agent.sell_with_raydium(
        input_mint=Pubkey.from_string("source-token-mint"),  # The token you want to sell
        percentage=100,
        slippage_bps=250  # Maximum slippage in basis points (2.5% here)
    )
    print(f"Transaction confirmed: {confirmed}")

import asyncio
asyncio.run(main())`}
                language="python"
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="burn-close">
          <Card>
            <CardHeader>
              <CardTitle>Burn & Close Token Account</CardTitle>
              <CardDescription>Burn and close a token account</CardDescription>
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

    response = await agent.burn_and_close_accounts("token-account-address")
    print("Account burned and closed:", response)

import asyncio
asyncio.run(main())`}
                language="python"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

