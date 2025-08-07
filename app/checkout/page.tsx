"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Breadcrumb from "@/components/breadcrumb"
import CheckoutStepper from "@/components/checkout-stepper"
import ProductValidation from "@/components/checkout/product-validation"
import AddressSelection from "@/components/checkout/address-selection"
import PaymentMethod from "@/components/checkout/payment-method"
import OrderComplete from "@/components/checkout/order-complete"

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [orderData, setOrderData] = useState({
    products: [],
    address: null,
    payment: null,
    orderId: null,
  })

  const steps = [
    { id: 1, title: "Produtos", description: "Validação do carrinho" },
    { id: 2, title: "Endereço", description: "Entrega" },
    { id: 3, title: "Pagamento", description: "Método" },
    { id: 4, title: "Finalizado", description: "Confirmação" },
  ]

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateOrderData = (data: any) => {
    setOrderData({ ...orderData, ...data })
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ProductValidation onNext={nextStep} onUpdateData={updateOrderData} />
      case 2:
        return <AddressSelection onNext={nextStep} onPrev={prevStep} onUpdateData={updateOrderData} />
      case 3:
        return <PaymentMethod onNext={nextStep} onPrev={prevStep} onUpdateData={updateOrderData} />
      case 4:
        return <OrderComplete orderData={orderData} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 py-8">
        {/* Container principal com largura máxima e padding responsivo */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Carrinho", href: "/carrinho" },
              { label: "Checkout", href: "/checkout" },
            ]}
          />

          <div className="mt-8 mb-8">
            <h1 className="text-3xl font-bold text-black mb-4">Finalizar Compra</h1>
            <p className="text-gray-600">Complete os dados para finalizar seu pedido</p>
          </div>

          {/* Stepper de Checkout */}
          <CheckoutStepper steps={steps} currentStep={currentStep} />

          {/* Conteúdo da Etapa */}
          <div className="mt-8">
            {renderStepContent()}
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
