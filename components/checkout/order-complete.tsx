import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent,  } from "@/components/ui/card"
import { CheckCircle, Home, Package, Receipt } from 'lucide-react'

interface OrderCompleteProps {
  orderData: any
}

export default function OrderComplete({ orderData }: OrderCompleteProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-8">
          {/* Ícone de Sucesso */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          {/* Mensagem de Sucesso */}
          <h2 className="text-2xl font-bold text-black mb-4">Pedido Realizado com Sucesso!</h2>
          <p className="text-gray-600 mb-6">
            Seu pedido foi confirmado e está sendo processado. Você receberá um e-mail com os detalhes.
          </p>

          {/* Detalhes do Pedido (grid responsivo) */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600">Número do Pedido</p>
                <p className="font-semibold text-black">{orderData.orderId || 'PED-123456789'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Método de Pagamento</p>
                <p className="font-semibold text-black">
                  {orderData.payment?.method === 'credit' && 'Cartão de Crédito'}
                  {orderData.payment?.method === 'pix' && 'PIX'}
                  {orderData.payment?.method === 'boleto' && 'Boleto Bancário'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Endereço de Entrega</p>
                <p className="font-semibold text-black">
                  {orderData.address?.alias || 'Casa'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Prazo de Entrega</p>
                <p className="font-semibold text-black">3-5 dias úteis</p>
              </div>
            </div>
          </div>

          {/* Botões de Ação (empilhados no mobile, lado a lado no sm e acima) */}
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Voltar para Home
              </Link>
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/pedidos">
                  <Package className="h-5 w-5 mr-2" />
                  Meus Pedidos
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <Link href="/produtos">
                  <Receipt className="h-5 w-5 mr-2" />
                  Continuar Comprando
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
