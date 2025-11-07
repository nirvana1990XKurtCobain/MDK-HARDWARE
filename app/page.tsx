import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import FeaturedProducts from "@/components/featured-products"

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
    </div>
  )
}
