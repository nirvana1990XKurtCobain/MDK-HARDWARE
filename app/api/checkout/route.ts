import { NextResponse } from "next/server"
import products from "@/data/products.json"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const productId = body?.id

    if (!productId) {
      return NextResponse.json(
        { error: "ID produk tidak ditemukan!" },
        { status: 400 }
      )
    }

    const product = products.products.find((p) => p.id === Number(productId))

    if (!product) {
      return NextResponse.json(
        { error: "Produk tidak ditemukan!" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Checkout berhasil",
        product,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    )
  }
}
