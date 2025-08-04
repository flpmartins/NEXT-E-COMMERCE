"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const featuredProducts = [
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
    name: "Placa de Vídeo RTX",
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
]

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  // Responsividade - ajustar itens por slide baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2) // Tablet: 2 itens
      } else {
        setItemsPerSlide(3) // Desktop: 3 itens
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(featuredProducts.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  // Auto-play (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Muda slide a cada 5 segundos

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Produtos em Destaque</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Os melhores produtos em tecnologia e gaming selecionados especialmente para você
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white border-gray-300 hover:bg-gray-50 shadow-lg z-10 p-0"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white border-gray-300 hover:bg-gray-50 shadow-lg z-10 p-0"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
