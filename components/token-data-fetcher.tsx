'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

interface TokenData {
  name: string
  symbol: string
  price: number
  marketCap: number
}

export function TokenDataFetcher() {
  const [input, setInput] = useState('')
  const [tokenData, setTokenData] = useState<TokenData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchTokenData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/token-data?input=${input}`)
      if (!response.ok) {
        throw new Error('Failed to fetch token data')
      }
      const data = await response.json()
      setTokenData(data)
    } catch (error) {
      console.error('Error fetching token data:', error)
      setError('Failed to fetch token data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Token Data Fetcher</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Enter token ticker or address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={fetchTokenData} disabled={isLoading}>
            Fetch
          </Button>
        </div>
        {isLoading && <Skeleton className="h-20 w-full" />}
        {error && <div className="text-red-500">{error}</div>}
        {tokenData && (
          <div>
            <p><strong>Name:</strong> {tokenData.name}</p>
            <p><strong>Symbol:</strong> {tokenData.symbol}</p>
            <p><strong>Price:</strong> ${tokenData.price.toFixed(4)}</p>
            <p><strong>Market Cap:</strong> ${tokenData.marketCap.toLocaleString()}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

