import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
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
              <li>Batch burn and close token accounts</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>💱 Trading</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integrated Jupiter Exchange support</li>
              <li>Token swaps with customizable slippage</li>
              <li>Direct routing options</li>
              <li>Buy and sell tokens with Raydium liquidity</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🏦 Yield Farming</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lend idle assets to earn interest with Lulo</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🔗 LangChain Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilize LangChain tools for enhanced blockchain interactions</li>
              <li>Access a suite of tools for balance checks, transfers, token deployments, and more</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>📈 Performance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fetch current transactions per second (TPS) on the Solana network</li>
              <li>Get token data by ticker or address</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>🚀 Advanced Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Launch Pump & Fun tokens with customizable options</li>
              <li>Create Meteora DLMM pools with various configurations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

