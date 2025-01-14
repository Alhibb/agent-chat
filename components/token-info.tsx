'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"

interface TokenData {
  price: number
  marketCap: number
  volume: number
  priceChange24h: number
  liquidity: number
}

export function TokenInfo() {
  const [data, setData] = useState<TokenData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  const fetchData = async () => {
    try {
      const response = await fetch('/api/token-price')
      if (!response.ok) {
        throw new Error('Failed to fetch token data')
      }
      const jsonData = await response.json()
      setData(jsonData)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch token data. Retrying in 30 seconds.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num)
  }

  return (
    <Card className="w-[90vw] mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AgentiPy (APY) Token Information</CardTitle>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchData}
            disabled={isLoading}
          >
            Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open('https://coinmarketcap.com/dexscan/solana/4MkHae4CgjpR6xG6oDNsPeJsWkkS3uEcGifmt1EZJds2/', '_blank')}
          >
            <ExternalLink className="h-4 w-4" />
            View on CoinMarketCap
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Price USD</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <>
                  <div className="text-2xl font-bold">{formatNumber(data?.price || 0)}</div>
                  <div className={`text-sm ${data?.priceChange24h && data.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {data?.priceChange24h ? `${data.priceChange24h.toFixed(2)}%` : '0.00%'}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <div className="text-2xl font-bold">{formatNumber(data?.marketCap || 0)}</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Volume (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <div className="text-2xl font-bold">{formatNumber(data?.volume || 0)}</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Liquidity</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-32" />
              ) : (
                <div className="text-2xl font-bold">{formatNumber(data?.liquidity || 0)}</div>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Data updates automatically every 30 seconds
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

