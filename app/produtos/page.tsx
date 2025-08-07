"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Breadcrumb from "@/components/breadcrumb"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import ProductFilters from "@/components/product-filters"
import { Filter } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const allProducts = [
  {
    id: 1,
    name: 'Monitor Gamer 27" 144Hz',
    price: "R$ 1.899,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Teclado Mecânico RGB",
    price: "R$ 599,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Headset Gamer Wireless",
    price: "R$ 899,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Mouse Gamer 12000 DPI",
    price: "R$ 299,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Placa de Vídeo RTX 4070",
    price: "R$ 3.299,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "SSD NVMe 1TB",
    price: "R$ 699,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Processador Intel i7",
    price: "R$ 2.199,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Memória RAM 32GB",
    price: "R$ 899,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 9,
    name: "Webcam 4K Streaming",
    price: "R$ 449,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 10,
    name: 'Monitor Ultrawide 34"',
    price: "R$ 2.499,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 11,
    name: "Teclado Compacto 60%",
    price: "R$ 399,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 12,
    name: "Mouse Pad Gamer XXL",
    price: "R$ 89,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 13,
    name: "Cadeira Gamer Ergonômica",
    price: "R$ 1.299,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 14,
    name: "Fonte 80 Plus Gold 750W",
    price: "R$ 599,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 15,
    name: "Cooler CPU RGB",
    price: "R$ 249,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 16,
    name: "Gabinete Mid Tower",
    price: "R$ 399,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 17,
    name: "Placa Mãe B550",
    price: "R$ 799,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 18,
    name: "HD Externo 2TB",
    price: "R$ 459,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 19,
    name: "Microfone Condensador",
    price: "R$ 329,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 20,
    name: "Cabo HDMI 4K 2m",
    price: "R$ 49,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 21,
    name: "Switch Ethernet 8 Portas",
    price: "R$ 159,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 22,
    name: "Roteador Wi-Fi 6",
    price: "R$ 699,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 23,
    name: "Tablet Android 10.1",
    price: "R$ 899,00",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 24,
    name: "Smartphone 128GB",
    price: "R$ 1.599,00",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const PRODUCTS_PER_PAGE = 12

export default function ProductsPage() {
  const [displayedProducts, setDisplayedProducts] = useState(allProducts.slice(0, PRODUCTS_PER_PAGE))
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const hasMoreProducts = displayedProducts.length < allProducts.length

  const loadMoreProducts = () => {
    setLoading(true)
    
    // Simular delay de carregamento (como uma API real)
    setTimeout(() => {
      const nextPage = currentPage + 1
      const startIndex = (nextPage - 1) * PRODUCTS_PER_PAGE
      const endIndex = startIndex + PRODUCTS_PER_PAGE
      const newProducts = allProducts.slice(startIndex, endIndex)
      
      setDisplayedProducts([...displayedProducts, ...newProducts])
      setCurrentPage(nextPage)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Produtos", href: "/produtos" },
            ]}
          />

          <div className="mt-8 mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-black mb-4">Todos os Produtos</h1>
              <p className="text-lg text-gray-600">
                Explore nossa coleção completa de produtos em tecnologia e gaming
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 sm:w-96">
                  <SheetHeader>
                    <SheetTitle className="text-left">Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <ProductFilters />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <ProductFilters />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreProducts && (
                <div className="text-center">
                  <Button
                    onClick={loadMoreProducts}
                    disabled={loading}
                    size="lg"
                    className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base"
                  >
                    {loading ? "Carregando..." : "Ver Mais Produtos"}
                  </Button>
                </div>
              )}

              {/* End Message */}
              {!hasMoreProducts && displayedProducts.length > PRODUCTS_PER_PAGE && (
                <div className="text-center py-8">
                  <p className="text-gray-600">Você viu todos os nossos produtos!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
