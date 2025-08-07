import { Check } from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
}

interface CheckoutStepperProps {
  steps: Step[]
  currentStep: number
}

export default function CheckoutStepper({ steps, currentStep }: CheckoutStepperProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      {/* Flexbox responsivo: coluna no mobile, linha no sm e acima */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center">
              {/* Círculo do Passo */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                  step.id < currentStep
                    ? "bg-green-500 text-white"
                    : step.id === currentStep
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.id < currentStep ? <Check className="h-5 w-5" /> : step.id}
              </div>

              {/* Informações do Passo */}
              <div className="ml-3">
                <p
                  className={`text-sm font-medium ${
                    step.id <= currentStep ? "text-black" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            </div>

            {/* Linha Conectora (oculta no mobile, visível no sm e acima) */}
            {index < steps.length - 1 && (
              <div
                className={`hidden sm:flex-1 sm:block h-0.5 mx-4 ${
                  step.id < currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
