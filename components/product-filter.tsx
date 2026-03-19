"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "shoes", name: "Shoes" },
  { id: "sale", name: "Sale" },
]

const colors = [
  { id: "black", name: "Black" },
  { id: "white", name: "White" },
  { id: "blue", name: "Blue" },
  { id: "red", name: "Red" },
  { id: "green", name: "Green" },
]

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "")

  const handleCategoryChange = (category: string) => {
    const newCategory = category === selectedCategory ? "" : category
    setSelectedCategory(newCategory)

    const params = new URLSearchParams(searchParams.toString())
    if (newCategory) {
      params.set("category", newCategory)
    } else {
      params.delete("category")
    }

    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Accordion type="multiple" defaultValue={["categories", "colors"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategory === category.id}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="colors">
            <AccordionTrigger>Colors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div key={color.id} className="flex items-center space-x-2">
                    <Checkbox id={`color-${color.id}`} />
                    <Label htmlFor={`color-${color.id}`} className="text-sm font-normal cursor-pointer">
                      {color.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-under-50" />
                  <Label htmlFor="price-under-50" className="text-sm font-normal cursor-pointer">
                    Under $50
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-50-100" />
                  <Label htmlFor="price-50-100" className="text-sm font-normal cursor-pointer">
                    $50 - $100
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-100-200" />
                  <Label htmlFor="price-100-200" className="text-sm font-normal cursor-pointer">
                    $100 - $200
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-over-200" />
                  <Label htmlFor="price-over-200" className="text-sm font-normal cursor-pointer">
                    Over $200
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
