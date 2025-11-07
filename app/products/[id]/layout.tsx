import type React from "react"
import type { Metadata } from "next"
import products from "@/data/products.json"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = products.products.find((p) => p.id === Number(id))

  if (!product) {
    return {
      title: "Web Dalam Masa Pengembangan",
      description: "Halaman produk sedang dalam pengembangan.",
      keywords: "MDK HARDWARE, Produk, Hardware, Komputer",
      openGraph: {
        title: "Web Dalam Masa Pengembangan",
        description: "Halaman produk sedang dalam pengembangan.",
        type: "website",
      },
    }
  }

  return {
    title: `${product.name} - MDK HARDWARE`,
    description: product.description,
    keywords: `${product.name}, ${product.category}, MDK HARDWARE`,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website", // ✅ ubah dari "product" ke "website"
    },
  }
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
