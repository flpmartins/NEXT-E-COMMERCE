'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de login simulada
    console.log("Formulário de login enviado!")
    alert("Login simulado com sucesso! Redirecionando para a home.")
    // Em um app real, você redirecionaria para a home ou dashboard
    window.location.href = "/"
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">Entrar</CardTitle>
          <CardDescription className="text-gray-600">
            Acesse sua conta para continuar suas compras.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu.email@example.com" required className="bg-gray-50 border-gray-200" />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="********" required className="bg-gray-50 border-gray-200" />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Entrar
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            <Link href="/auth/forgot-password" className="font-medium text-black hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <div className="text-center text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link href="/auth/signup" className="font-medium text-black hover:underline">
              Crie uma
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
