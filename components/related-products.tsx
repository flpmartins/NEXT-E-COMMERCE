import ProductCard from "@/components/product-card"

const relatedProducts = [
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
    id: 10,
    name: "Suporte para Monitor",
    price: "R$ 199,00",
    image: "/placeholder.svg?height=300&width=300",
  },
]

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">Produtos Relacionados</h2>
        <p className="text-gray-600">Outros produtos que podem interessar você</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
