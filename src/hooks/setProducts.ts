import { useQuery } from '@tanstack/react-query'

export interface Products {
  id: number
  name: string
  description: string
  price: number
  category: string[]
  imageUrl: string
}

async function getProducts() {
  return fetch('http://localhost:3333/product').then(res => res.json())
}

export function useProducts() {
  const result = useQuery<Products[]>({
    queryKey: ['product'],
    queryFn: getProducts,
  })

  return result
}
