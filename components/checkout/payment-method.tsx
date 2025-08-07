import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, FileText, QrCode } from 'lucide-react'

const paymentMethods = [
  {
    id: "credit",
    name: "Cartão de Crédito",
    icon: CreditCard,
    description: "Visa, Mastercard, Elo",
  },
  {
    id: "pix",
    name: "PIX",
    icon: QrCode,
    description: "Pagamento instantâneo",
  },
  {
    id: "boleto",
    name: "Boleto Bancário",
    icon: FileText,
    description: "Vencimento em 3 dias úteis",
  },
]

interface PaymentMethodProps {
  onNext: () => void
  onPrev: () => void
  onUpdateData: (data: any) => void
}

export default function PaymentMethod({ onNext, onPrev, onUpdateData }: PaymentMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState("credit")
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  })

  const handleNext = () => {
    const paymentData = {
      method: selectedMethod,
      ...(selectedMethod === "credit" && { cardData }),
    }
    onUpdateData({ payment: paymentData, orderId: `PED-${Date.now()}` })
    onNext()
  }

  const renderPaymentForm = () => {
    if (selectedMethod === "credit") {
      return (
        <div className="space-y-4 mt-6">
          <div>
            <Label htmlFor="cardNumber">Número do Cartão</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardData.number}
              onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
              className="bg-gray-50 border-gray-200"
            />
          </div>
          <div>
            <Label htmlFor="cardName">Nome no Cartão</Label>
            <Input
              id="cardName"
              placeholder="João Silva"
              value={cardData.name}
              onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
              className="bg-gray-50 border-gray-200"
            />
          </div>
          {/* Grid responsivo para validade e CVV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Validade</Label>
              <Input
                id="expiry"
                placeholder="MM/AA"
                value={cardData.expiry}
                onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cardData.cvv}
                onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                className="bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </div>
      )
    }

    if (selectedMethod === "pix") {
      return (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Após confirmar o pedido, você receberá o código PIX para pagamento instantâneo.
          </p>
        </div>
      )
    }

    if (selectedMethod === "boleto") {
      return (
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            O boleto será gerado após a confirmação do pedido. Vencimento em 3 dias úteis.
          </p>
        </div>
      )
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-black">Método de Pagamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <div
                key={method.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedMethod === method.id
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        selectedMethod === method.id
                          ? "border-black bg-black"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                  </div>
                  
                  <IconComponent className="h-5 w-5 text-gray-600" />
                  
                  <div>
                    <p className="font-semibold text-black">{method.name}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </div>
              </div>
            )
          })}

          {renderPaymentForm()}
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
          Finalizar Compra
        </Button>
      </div>
    </div>
  )
}
