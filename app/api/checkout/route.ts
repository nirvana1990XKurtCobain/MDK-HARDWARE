import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Simulasi proses pembayaran Midtrans
    const transactionData = {
      transaction_id: `MDK-${Date.now()}`,
      order_id: `ORDER-${Date.now()}`,
      gross_amount: body.total,
      customer_details: {
        first_name: body.fullName,
        email: body.email,
        phone: body.phone,
      },
      item_details: body.items,
      payment_method: body.paymentMethod,
      status: "pending",
      created_at: new Date().toISOString(),
    }

    // Log transaksi (di production: kirim ke Midtrans API)
    console.log("Payment Transaction:", transactionData)

    // Simulasi delay pemrosesan
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        transaction_id: transactionData.transaction_id,
        order_id: transactionData.order_id,
        message: "Pesanan berhasil diproses",
      },
      { status: 200 } // ⚠️ koma terakhir dihapus
    )
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { success: false, message: "Gagal memproses pesanan" },
      { status: 500 } // ⚠️ koma terakhir dihapus
    )
  }
}
