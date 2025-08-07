"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, User, ShoppingCart } from 'lucide-react'
import Cart from "@/components/cart"

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  // Estado para simular o status de login do usuário
  // Altere para 'true' para testar o estado logado, ou 'false' para deslogado
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true) 

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <h1 className="text-xl font-bold text-black">TechStore</h1>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors duration-200">
                Home
              </Link>
              <Link href="/produtos" className="text-gray-700 hover:text-black transition-colors duration-200">
                Produtos
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-black transition-colors duration-200">
                Contato
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-2">
              {/* Cart Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="hidden md:flex text-gray-700 hover:text-black p-2 relative"
              >
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                </div>
                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* User Avatar / Sign In Button (Conditional) */}
              {isLoggedIn ? (
                <Button asChild variant="ghost" size="sm" className="hidden md:flex text-gray-700 hover:text-black p-2">
                  <Link href="/perfil">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                      <User className="h-4 w-4" />
                    </div>
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="ghost" size="sm" className="hidden md:flex text-gray-700 hover:text-black p-2">
                  <Link href="/auth/signin">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                      <User className="h-4 w-4" />
                    </div>
                  </Link>
                </Button>
              )}

              {/* Mobile actions */}
              <div className="flex items-center gap-2 md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(true)}
                  className="text-gray-700 hover:text-black p-2 relative"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                  </div>
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>

                {isLoggedIn ? (
                  <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-black p-2">
                    <Link href="/perfil">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                        <User className="h-4 w-4" />
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-black p-2">
                    <Link href="/auth/signin">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                        <User className="h-4 w-4" />
                      </div>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
