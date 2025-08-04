import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  description: string
  features: string[]
  specifications: Record<string, string>
}

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviewCount} avaliações)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-black">{product.price}</span>
          {product.originalPrice && <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>}
        </div>
        {product.originalPrice && (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Economize{" "}
            {(
              ((Number.parseFloat(product.originalPrice.replace(/[R$\s.,]/g, "")) -
                Number.parseFloat(product.price.replace(/[R$\s.,]/g, ""))) /
                Number.parseFloat(product.originalPrice.replace(/[R$\s.,]/g, ""))) *
              100
            ).toFixed(0)}
            %
          </Badge>
        )}
      </div>

      {/* Stock Status */}
      <div>
        {product.inStock ? (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            ✓ Em estoque
          </Badge>
        ) : (
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            ✗ Fora de estoque
          </Badge>
        )}
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white" disabled={!product.inStock}>
          <ShoppingCart className="h-5 w-5 mr-2" />
          Adicionar ao Carrinho
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
        >
          <Heart className="h-5 w-5 mr-2" />
          Adicionar aos Favoritos
        </Button>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Truck className="h-4 w-4" />
          <span>Frete grátis</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Garantia 2 anos</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <RotateCcw className="h-4 w-4" />
          <span>Troca em 30 dias</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Descrição</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Características</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Specifications */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-3">Especificações Técnicas</h3>
        <div className="space-y-3">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-600 font-medium">{key}</span>
              <span className="text-black">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
