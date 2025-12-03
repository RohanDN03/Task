import { NextResponse } from 'next/server'
import { siteData } from '@/lib/data'

// API route that serves the same data used by the page
// This demonstrates the API routes requirement while keeping data in a shared module

export async function GET() {
    return NextResponse.json(siteData)
}
