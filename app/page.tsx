import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
