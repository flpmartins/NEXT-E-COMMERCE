'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de registro simulada
    console.log("Formulário de registro enviado!")
    alert("Registro simulado com sucesso! Redirecionando para o login.")
    // Em um app real, você redirecionaria para a página de login ou dashboard
    window.location.href = "/auth/signin"
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">Criar Conta</CardTitle>
          <CardDescription className="text-gray-600">
            Crie sua conta para ter acesso a todos os recursos da TechStore.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" type="text" placeholder="Seu nome" required className="bg-gray-50 border-gray-200" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu.email@example.com" required className="bg-gray-50 border-gray-200" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" required className="bg-gray-50 border-gray-200" />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <Input id="confirm-password" type="password" placeholder="********" required className="bg-gray-50 border-gray-200" />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Criar Conta
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Já tem uma conta?{" "}
            <Link href="/auth/signin" className="font-medium text-black hover:underline">
              Faça login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
