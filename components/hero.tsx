import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Tecnologia que<span className="block text-gray-600">Eleva seu Game</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra os melhores produtos em tecnologia, hardware e gaming. Equipamentos de alta performance para gamers
            e entusiastas da tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base">
              <Link href="/produtos">Ver Produtos</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base bg-transparent"
            >
              <Link href="/ofertas">Ofertas Especiais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
