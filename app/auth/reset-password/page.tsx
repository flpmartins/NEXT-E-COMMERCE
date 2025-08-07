'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de redefinição de senha simulada
    console.log("Formulário de redefinição de senha enviado!")
    alert("Sua senha foi redefinida com sucesso! Faça login com a nova senha.")
    // Em um app real, você redirecionaria para a página de login
    window.location.href = "/auth/signin"
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">Redefinir Senha</CardTitle>
          <CardDescription className="text-gray-600">
            Crie uma nova senha para sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="new-password">Nova Senha</Label>
              <Input id="new-password" type="password" placeholder="********" required className="bg-gray-50 border-gray-200" />
            </div>
            <div>
              <Label htmlFor="confirm-new-password">Confirmar Nova Senha</Label>
              <Input id="confirm-new-password" type="password" placeholder="********" required className="bg-gray-50 border-gray-200" />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Redefinir Senha
            </Button>
          </form>
          <div className="text-center text-sm text-gray-600">
            <Link href="/auth/signin" className="font-medium text-black hover:underline">
              Voltar para o login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
