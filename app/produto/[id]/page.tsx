import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Breadcrumb from "@/components/breadcrumb"
import ProductGallery from "@/components/product-gallery"
import ProductInfo from "@/components/product-info"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"

// Mock data - em um app real, isso viria de uma API
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: "1",
      name: 'Monitor Gamer 27" 144Hz',
      price: "R$ 1.899,00",
      originalPrice: "R$ 2.299,00",
      category: "Monitores",
      brand: "TechPro",
      rating: 4.8,
      reviewCount: 127,
      inStock: true,
      images: [
        "/placeholder.svg?height=600&width=600&text=Monitor+Principal",
        "/placeholder.svg?height=600&width=600&text=Monitor+Lateral",
        "/placeholder.svg?height=600&width=600&text=Monitor+Traseira",
        "/placeholder.svg?height=600&width=600&text=Monitor+Detalhes",
      ],
      description:
        "Monitor gamer de alta performance com tela de 27 polegadas, taxa de atualização de 144Hz e tecnologia IPS para cores vibrantes e ângulos de visão amplos. Ideal para jogos competitivos e trabalho profissional.",
      features: [
        "Tela IPS de 27 polegadas",
        "Resolução 2K (2560x1440)",
        "Taxa de atualização 144Hz",
        "Tempo de resposta 1ms",
        "HDR10 suportado",
        "Conectividade HDMI 2.1 e DisplayPort",
        "Ajuste de altura e rotação",
        "Modo Gaming com baixa latência",
      ],
      specifications: {
        "Tamanho da Tela": '27"',
        Resolução: "2560 x 1440 (2K)",
        "Taxa de Atualização": "144Hz",
        "Tempo de Resposta": "1ms",
        "Tipo de Painel": "IPS",
        Brilho: "400 cd/m²",
        Contraste: "1000:1",
        Conectividade: "HDMI 2.1, DisplayPort 1.4, USB-C",
        Dimensões: "614 x 461 x 210 mm",
        Peso: "6.8 kg",
      },
    },
  }

  return products[id as keyof typeof products] || null
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black mb-4">Produto não encontrado</h1>
            <p className="text-gray-600">O produto que você está procurando não existe.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: product.category, href: `/categoria/${product.category.toLowerCase()}` },
              { label: product.name, href: "#" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <ProductGallery images={product.images} productName={product.name} />
            <ProductInfo product={product} />
          </div>

          <ProductReviews productId={product.id} rating={product.rating} reviewCount={product.reviewCount} />
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}
