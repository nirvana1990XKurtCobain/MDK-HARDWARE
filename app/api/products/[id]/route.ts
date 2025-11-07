import products from "@/data/products.json"

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {

  const product = products.products.find((p) => p.id === Number(params.id))

  if (!product) {
    return <h1 className="text-center mt-10 text-red-500">Produk tidak ditemukan</h1>
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.category}</p>
      <p>{product.description}</p>
      <p className="font-semibold mt-4 text-lg">
        Harga: Rp {product.price.toLocaleString("id-ID")}
      </p>
    </div>
  )
}
