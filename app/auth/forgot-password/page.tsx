'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de envio de link de redefinição simulada
    console.log("Formulário de recuperação de senha enviado!")
    alert("Se o email estiver cadastrado, um link de redefinição foi enviado.")
    // Em um app real, você redirecionaria para uma página de confirmação ou login
    window.location.href = "/auth/signin"
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-black">Esqueceu a Senha?</CardTitle>
          <CardDescription className="text-gray-600">
            Insira seu email para receber um link de redefinição de senha.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu.email@example.com" required className="bg-gray-50 border-gray-200" />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
              Enviar Link de Redefinição
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
