import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from '@/components/code-block'

export function QuickStart() {
  return (
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
  )
}

