import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApiReference() {
  return (
    <section id="api" className="container px-4 py-16 bg-muted">
      <h2 className="text-3xl font-bold tracking-tight mb-8">API Reference</h2>
      <Tabs defaultValue="token-ops" className="space-y-4">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="token-ops">Token Operations</TabsTrigger>
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="yield">Yield Farming</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="token-ops">
          <Card>
            <CardHeader>
              <CardTitle>Token Operations</CardTitle>
              <CardDescription>Core functions for token management</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  name: 'transfer',
                  signature: 'transfer(agent, to, amount, mint?)',
                  description: 'Transfer tokens between addresses'
                },
                {
                  name: 'get_balance',
                  signature: 'get_balance(agent, token_address)',
                  description: 'Get token balance for an address'
                },
                {
                  name: 'stake',
                  signature: 'stake(agent, amount)',
                  description: 'Stake SOL tokens'
                },
                {
                  name: 'deploy_token',
                  signature: 'deploy_token(agent, decimals)',
                  description: 'Deploy a new token'
                },
                {
                  name: 'request_faucet_funds',
                  signature: 'request_faucet_funds(agent)',
                  description: 'Request tokens from faucet'
                },
                {
                  name: 'burn_and_close_accounts',
                  signature: 'burn_and_close_accounts(agent, token_account)',
                  description: 'Burn tokens and close account'
                }
              ].map((fn) => (
                <Card key={fn.name} className="p-4">
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">{fn.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{fn.signature}</p>
                  <p className="text-sm">{fn.description}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trading">
          <Card>
            <CardHeader>
              <CardTitle>Trading Functions</CardTitle>
              <CardDescription>Functions for DEX trading operations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  name: 'trade',
                  signature: 'trade(agent, output_mint, input_amount, input_mint?, slippage_bps?)',
                  description: 'Execute a trade on Jupiter Exchange'
                },
                {
                  name: 'buy_with_raydium',
                  signature: 'buy_with_raydium(agent, pair_address, sol_in, slippage)',
                  description: 'Buy tokens using Raydium liquidity'
                },
                {
                  name: 'sell_with_raydium',
                  signature: 'sell_with_raydium(agent, pair_address, percentage, slippage)',
                  description: 'Sell tokens using Raydium liquidity'
                }
              ].map((fn) => (
                <Card key={fn.name} className="p-4">
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">{fn.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{fn.signature}</p>
                  <p className="text-sm">{fn.description}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="yield">
          <Card>
            <CardHeader>
              <CardTitle>Yield Farming</CardTitle>
              <CardDescription>Functions for yield farming operations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  name: 'lend_asset',
                  signature: 'lend_asset(agent, asset_mint, amount)',
                  description: 'Lend assets to earn yield'
                }
              ].map((fn) => (
                <Card key={fn.name} className="p-4">
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">{fn.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{fn.signature}</p>
                  <p className="text-sm">{fn.description}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance & Data</CardTitle>
              <CardDescription>Functions for fetching network and token data</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  name: 'get_tps',
                  signature: 'get_tps(agent)',
                  description: 'Get current Solana network TPS'
                },
                {
                  name: 'get_token_data_by_ticker',
                  signature: 'get_token_data_by_ticker(agent, ticker)',
                  description: 'Fetch token data using ticker symbol'
                },
                {
                  name: 'get_token_data_by_address',
                  signature: 'get_token_data_by_address(agent, mint)',
                  description: 'Fetch token data using mint address'
                }
              ].map((fn) => (
                <Card key={fn.name} className="p-4">
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">{fn.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{fn.signature}</p>
                  <p className="text-sm">{fn.description}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Features</CardTitle>
              <CardDescription>Advanced token and pool operations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  name: 'launch_pump_fun_token',
                  signature: 'launch_pump_fun_token(agent, token_name, token_ticker, description, image_url, options)',
                  description: 'Launch a new token with custom parameters'
                },
                {
                  name: 'create_meteora_dlmm_pool',
                  signature: 'create_meteora_dlmm_pool(agent, bin_step, token_a_mint, token_b_mint, initial_price, price_rounding_up, fee_bps, activation_type, has_alpha_vault, activation_point)',
                  description: 'Create a new Meteora DLMM liquidity pool'
                }
              ].map((fn) => (
                <Card key={fn.name} className="p-4">
                  <h3 className="font-mono text-sm font-bold text-primary mb-2">{fn.name}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2">{fn.signature}</p>
                  <p className="text-sm">{fn.description}</p>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

