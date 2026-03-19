export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
  sale?: boolean
  color?: string
  size?: string
  quantity?: number
}

export interface CartItem extends Product {
  quantity: number
}
