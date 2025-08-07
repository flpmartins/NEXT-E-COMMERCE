"use client"

import type React from "react"
import Link from "next/link"
import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, Trash2 } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: string
  image: string
  quantity: number
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

// Mock cart items
const cartItems: CartItem[] = [
  {
    id: 1,
    name: 'Monitor Gamer 27" 144Hz',
    price: "R$ 1.899,00",
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
  {
    id: 2,
    name: "Teclado Mecânico RGB",
    price: "R$ 599,00",
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
  },
  {
    id: 4,
    name: "Mouse Gamer 12000 DPI",
    price: "R$ 299,00",
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
]

export default function Cart({ isOpen, onClose }: CartProps) {
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close cart when clicking outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number.parseFloat(item.price.replace(/[R$\s.,]/g, "")) / 100
    return total + price * item.quantity
  }, 0)

  return (
    // Overlay com transição de opacidade e fundo escuro sutil
    // O componente agora está sempre no DOM, mas sua visibilidade e interatividade são controladas por classes
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 bg-black/50" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      {/* Sidebar do Carrinho com transição de transformação */}
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-black">Carrinho ({cartItems.length})</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-black">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                <Button onClick={onClose} className="bg-black hover:bg-gray-800 text-white">
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
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
                      <h3 className="text-sm font-medium text-black mb-1 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.price}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 p-1">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-black">Subtotal:</span>
                <span className="text-lg font-bold text-black">
                  R$ {subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <Link href="/checkout">Finalizar Compra</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  onClick={onClose}
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
