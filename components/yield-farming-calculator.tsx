'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function YieldFarmingCalculator() {
  const [principal, setPrincipal] = useState('')
  const [apy, setAPY] = useState('')
  const [days, setDays] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateYield = () => {
    const p = parseFloat(principal)
    const r = parseFloat(apy) / 100 / 365
    const t = parseFloat(days)
    const yieldAmount = p * Math.pow(1 + r, t) - p
    setResult(yieldAmount)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Yield Farming Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Principal amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <Input
            type="number"
            placeholder="APY (%)"
            value={apy}
            onChange={(e) => setAPY(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <Button onClick={calculateYield}>Calculate</Button>
          {result !== null && (
            <div className="mt-4">
              <strong>Estimated Yield:</strong> ${result !== null ? result.toFixed(2) : '0.00'}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

