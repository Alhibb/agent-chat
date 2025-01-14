import { NextResponse } from 'next/server'

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'

interface TokenData {
  market_data: {
    current_price: { usd: number }
    market_cap: { usd: number }
    total_volume: { usd: number }
    price_change_percentage_24h: number
    total_liquidity: number
  }
}

async function fetchTokenData(): Promise<TokenData> {
  const response = await fetch(
    `${COINGECKO_API_URL}/coins/agentipy?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false`
  )
  
  if (!response.ok) {
    throw new Error('Failed to fetch token data')
  }

  return response.json()
}

export async function GET() {
  try {
    const data = await fetchTokenData()
    
    return NextResponse.json({
      price: data.market_data.current_price.usd,
      marketCap: data.market_data.market_cap.usd,
      volume: data.market_data.total_volume.usd,
      priceChange24h: data.market_data.price_change_percentage_24h,
      liquidity: data.market_data.total_liquidity || 0,
    })
  } catch (error) {
    console.error('Error fetching token data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch token data' },
      { status: 500 }
    )
  }
}

