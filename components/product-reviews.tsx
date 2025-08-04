import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductReviewsProps {
  productId: string
  rating: number
  reviewCount: number
}

const mockReviews = [
  {
    id: 1,
    author: "João Silva",
    rating: 5,
    date: "15 de Janeiro, 2024",
    title: "Excelente monitor para gaming",
    content:
      "Comprei este monitor há 3 meses e estou muito satisfeito. A qualidade da imagem é excepcional e os 144Hz fazem toda a diferença nos jogos competitivos. Recomendo!",
    helpful: 12,
  },
  {
    id: 2,
    author: "Maria Santos",
    rating: 4,
    date: "8 de Janeiro, 2024",
    title: "Ótima qualidade de imagem",
    content:
      "Monitor com cores muito vivas e boa construção. O único ponto negativo é que poderia ter mais portas USB, mas no geral estou satisfeita com a compra.",
    helpful: 8,
  },
  {
    id: 3,
    author: "Pedro Costa",
    rating: 5,
    date: "2 de Janeiro, 2024",
    title: "Vale cada centavo",
    content:
      "Upgrade perfeito para meu setup. A diferença na fluidez dos jogos é notável. Montagem foi fácil e o design é muito elegante.",
    helpful: 15,
  },
]

export default function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">Avaliações dos Clientes</h2>

        {/* Rating Summary */}
        <div className="flex items-center gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-1">{rating}</div>
            <div className="flex items-center justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">{reviewCount} avaliações</div>
          </div>

          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2 mb-1">
                <span className="text-sm text-gray-600 w-8">{stars}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{stars === 5 ? 89 : stars === 4 ? 25 : 13}</span>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
          Escrever Avaliação
        </Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-black">{review.author}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>

            <h4 className="font-medium text-black mb-2">{review.title}</h4>
            <p className="text-gray-600 mb-3 leading-relaxed">{review.content}</p>

            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors">
              <ThumbsUp className="h-4 w-4" />
              Útil ({review.helpful})
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
