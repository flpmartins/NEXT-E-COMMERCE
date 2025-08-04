import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Breadcrumb from "@/components/breadcrumb"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contato", href: "/contato" },
            ]}
          />

          <h1 className="text-3xl font-bold text-black mt-8 mb-4">Fale Conosco</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Tem alguma dúvida, sugestão ou precisa de suporte? Preencha o formulário abaixo ou utilize nossos canais de
            atendimento.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6">Envie sua Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <Input id="name" type="text" placeholder="Seu nome" required className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@example.com"
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva sua dúvida ou solicitação..."
                    rows={5}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">Nossos Contatos</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black">Endereço</h3>
                      <p className="text-gray-700">Rua da Tecnologia, 123</p>
                      <p className="text-gray-700">Bairro Inovação, Cidade Tech - SP</p>
                      <p className="text-gray-700">CEP: 01000-000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-gray-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-black">Telefone</h3>
                      <p className="text-gray-700">(11) 4002-8922</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-gray-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-black">Email</h3>
                      <p className="text-gray-700">suporte@techstore.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-gray-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-black">Horário de Atendimento</h3>
                      <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-700">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video border border-gray-200 shadow-sm flex items-center justify-center text-gray-500">
                <p>Placeholder para Mapa (Google Maps, OpenStreetMap, etc.)</p>
              </div>

              {/* Social Media Links (reusing footer style) */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6">Siga-nos nas Redes Sociais</h2>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Instagram">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z" />
                    </svg>
                  </Link>

                  <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Facebook">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>

                  <Link href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Twitter">
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
