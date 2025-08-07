import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Plus } from 'lucide-react'

// Mock addresses
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

interface AddressSelectionProps {
  onNext: () => void
  onPrev: () => void
  onUpdateData: (data: any) => void
}

export default function AddressSelection({ onNext, onPrev, onUpdateData }: AddressSelectionProps) {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id)

  const handleNext = () => {
    const address = addresses.find(addr => addr.id === selectedAddress)
    onUpdateData({ address })
    onNext()
  }

  return (
    <div className="space-y-6">
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          {/* Flexbox responsivo para o cabeçalho */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <CardTitle className="text-xl font-semibold text-black">Endereço de Entrega</CardTitle>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
              <Plus className="h-4 w-4 mr-2" />
              Novo Endereço
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                selectedAddress === address.id
                  ? "border-black bg-gray-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedAddress(address.id)}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      selectedAddress === address.id
                        ? "border-black bg-black"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedAddress === address.id && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-600 flex-shrink-0" />
                    <span className="font-semibold text-black">{address.alias}</span>
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
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Botões de Navegação */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <Button
          onClick={onPrev}
          variant="outline"
          size="lg"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full sm:w-auto"
        >
          Voltar
        </Button>
        <Button
          onClick={handleNext}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white w-full sm:w-auto"
        >
          Continuar para Pagamento
        </Button>
      </div>
    </div>
  )
}
