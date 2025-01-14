import { NextResponse } from 'next/server'

// This is a mock function. In a real-world scenario, you would use a Solana RPC client to fetch actual TPS data.
async function fetchSolanaTPS(): Promise<number> {
  // Simulating an API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Return a random TPS between 1000 and 5000 for demonstration purposes
  return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000)
}

export async function GET() {
  try {
    const tps = await fetchSolanaTPS()
    return NextResponse.json({ tps })
  } catch (error) {
    console.error('Error fetching Solana TPS:', error)
    return NextResponse.json({ error: 'Failed to fetch TPS data' }, { status: 500 })
  }
}

