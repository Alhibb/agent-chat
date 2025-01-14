'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"

export function TPSTracker() {
  const [tps, setTPS] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  const fetchTPS = async () => {
    try {
      const response = await fetch('/api/tps')
      if (!response.ok) {
        throw new Error('Failed to fetch TPS')
      }
      const data = await response.json()
      setTPS(data.tps)
    } catch (error) {
      console.error('Error fetching TPS:', error)
      toast({
        title: "Error",
        description: "Failed to fetch TPS data. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTPS()
    const interval = setInterval(fetchTPS, 10000) // Update every 10 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Solana TPS</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-20" />
        ) : (
          <div className="text-3xl font-bold">
            {tps !== null ? tps.toLocaleString() : 'N/A'}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

