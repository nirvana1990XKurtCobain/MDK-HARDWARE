import { NextResponse } from "next/server"
import products from "@/data/products.json"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const productId = Number(params.id)
  const product = products.products.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json(
      { error: "Produk tidak ditemukan" },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    product,
  })
}
