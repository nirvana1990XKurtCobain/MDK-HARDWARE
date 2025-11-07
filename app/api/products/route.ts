import { type NextRequest, NextResponse } from "next/server"
import products from "@/data/products.json"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    let filtered = products.products

    if (category && category !== "all") {
      filtered = filtered.filter((p) => p.category === category)
    }

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    return NextResponse.json({ success: true, data: filtered }, { status: 200 })
  } catch (error) {
    console.error("Products API error:", error)
    return NextResponse.json({ success: false, message: "Stock Sedang Habis" }, { status: 500 })
  }
}
