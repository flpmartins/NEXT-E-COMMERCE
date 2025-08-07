"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from 'lucide-react'

// Mock cart items
const cartItems = [
  {
    id: 1,
    name: 'Monitor Gamer 27" 144Hz',
    price: 1899.00,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
  {
    id: 2,
    name: "Teclado Mecânico RGB",
    price: 599.00,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
  },
  {
    id: 4,
    name: "Mouse Gamer 12000 DPI",
    price: 299.00,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
]

interface ProductValidationProps {
  onNext: () => void
  onUpdateData: (data: any) => void
}

export default function ProductValidation({ onNext, onUpdateData }: ProductValidationProps) {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = 0 // Frete grátis
  const total = subtotal + shipping

  const handleNext = () => {
    onUpdateData({ products: cartItems })
    onNext()
  }

  return (
    // Grid responsivo: 1 coluna no mobile, 3 colunas no lg e acima
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Lista de Produtos (ocupa 2 colunas no lg) */}
      <div className="lg:col-span-2">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-black">Seus Produtos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-100 last:border-b-0">
                <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-black mb-2">{item.name}</h3>
                  <p className="text-xl font-bold text-black mb-3">
                    R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>

                  {/* Controles de quantidade e remover */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remover
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Resumo do Pedido (sticky no desktop, rola no mobile) */}
      <div>
        <Card className="border-gray-200 shadow-sm lg:sticky lg:top-24">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-black">Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frete</span>
              <span className="font-medium text-green-600">Grátis</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-black">Total</span>
                <span className="text-lg font-bold text-black">
                  R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            <Button 
              onClick={handleNext}
              className="w-full bg-black hover:bg-gray-800 text-white mt-6"
              size="lg"
            >
              Continuar para Endereço
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
