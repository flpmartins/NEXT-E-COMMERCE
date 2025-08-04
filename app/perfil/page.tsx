import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Breadcrumb from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil, MapPin, Plus } from "lucide-react"

// Mock data for user and addresses
const user = {
  name: "João Silva",
  email: "joao.silva@example.com",
  avatar: "/placeholder.svg?height=100&width=100&text=JS",
  phone: "(11) 98765-4321",
  memberSince: "Janeiro de 2023",
}

const addresses = [
  {
    id: 1,
    alias: "Casa",
    street: "Rua das Flores, 123",
    complement: "Apto 45",
    neighborhood: "Jardim Botânico",
    city: "São Paulo",
    state: "SP",
    zip: "01234-567",
    isDefault: true,
  },
  {
    id: 2,
    alias: "Trabalho",
    street: "Av. Paulista, 1000",
    complement: "Andar 15, Sala 1501",
    neighborhood: "Bela Vista",
    city: "São Paulo",
    state: "SP",
    zip: "09876-543",
    isDefault: false,
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Meu Perfil", href: "/profile" },
            ]}
          />

          <h1 className="text-3xl font-bold text-black mt-8 mb-8">Meu Perfil</h1>

          {/* Profile Information Card */}
          <Card className="mb-8 border-gray-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl font-semibold text-black">Informações Pessoais</CardTitle>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-black">
                <Pencil className="h-4 w-4 mr-2" />
                Editar
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <Avatar className="h-24 w-24 border-2 border-gray-200">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-black mb-1">{user.name}</p>
                <p className="text-gray-600 mb-1">{user.email}</p>
                <p className="text-gray-600 mb-1">{user.phone}</p>
                <p className="text-sm text-gray-500">Membro desde: {user.memberSince}</p>
              </div>
            </CardContent>
          </Card>

          {/* Addresses Section */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-black">Meus Endereços</h2>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Endereço
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addresses.map((address) => (
              <Card key={address.id} className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-black flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-600" />
                      {address.alias}
                    </h3>
                    {address.isDefault && (
                      <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        Padrão
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{address.street}</p>
                  {address.complement && <p className="text-gray-700">{address.complement}</p>}
                  <p className="text-gray-700">{address.neighborhood}</p>
                  <p className="text-gray-700">
                    {address.city}, {address.state} - {address.zip}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      Editar
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">
                      Remover
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
