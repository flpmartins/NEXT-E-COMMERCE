import { Monitor, Gamepad2, Headphones, Keyboard, Mouse, Cpu, HardDrive, Smartphone } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Monitores",
    icon: Monitor,
    href: "/categoria/monitores",
  },
  {
    id: 2,
    name: "Gaming",
    icon: Gamepad2,
    href: "/categoria/gaming",
  },
  {
    id: 3,
    name: "Audio",
    icon: Headphones,
    href: "/categoria/audio",
  },
  {
    id: 4,
    name: "Teclados",
    icon: Keyboard,
    href: "/categoria/teclados",
  },
  {
    id: 5,
    name: "Mouses",
    icon: Mouse,
    href: "/categoria/mouses",
  },
  {
    id: 6,
    name: "Hardware",
    icon: Cpu,
    href: "/categoria/hardware",
  },
  {
    id: 7,
    name: "Storage",
    icon: HardDrive,
    href: "/categoria/storage",
  },
  {
    id: 8,
    name: "Mobile",
    icon: Smartphone,
    href: "/categoria/mobile",
  },
]

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Categorias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção completa de produtos tech e gaming
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <a
                key={category.id}
                href={category.href}
                className="group flex flex-col items-center text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mb-3 group-hover:border-gray-400 group-hover:shadow-lg transition-all duration-200">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700 group-hover:text-black transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  {category.name}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
