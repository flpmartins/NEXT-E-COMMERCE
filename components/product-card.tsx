import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xl font-bold text-gray-900 mb-4">{product.price}</p>

          <Button
            asChild
            variant="outline"
            className="w-full border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 bg-transparent"
          >
            <Link href={`/produto/${product.id}`}>Ver Detalhes</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
