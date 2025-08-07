"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Monitor, Gamepad2, Headphones, Keyboard, Mouse, Cpu, HardDrive, Smartphone } from 'lucide-react'

const categories = [
  { id: "monitores", name: "Monitores", icon: Monitor, count: 15 },
  { id: "gaming", name: "Gaming", icon: Gamepad2, count: 8 },
  { id: "audio", name: "Audio", icon: Headphones, count: 12 },
  { id: "teclados", name: "Teclados", icon: Keyboard, count: 9 },
  { id: "mouses", name: "Mouses", icon: Mouse, count: 11 },
  { id: "hardware", name: "Hardware", icon: Cpu, count: 18 },
  { id: "storage", name: "Storage", icon: HardDrive, count: 7 },
  { id: "mobile", name: "Mobile", icon: Smartphone, count: 5 },
]

export default function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
  }

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-black">Categorias</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.id} className="flex items-center space-x-3">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <label
                  htmlFor={category.id}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700 cursor-pointer flex-1"
                >
                  <IconComponent className="h-4 w-4 text-gray-600" />
                  <span>{category.name}</span>
                  <span className="text-gray-500">({category.count})</span>
                </label>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <button
        variant="outline"
        onClick={clearFilters}
        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
      >
        Limpar Filtros
      </button>
    </div>
  )
}
