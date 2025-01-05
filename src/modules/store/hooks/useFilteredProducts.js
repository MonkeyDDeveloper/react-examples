import { useMemo } from 'react'
import useFilters from '../hooks/useFilters'

export default function useFilteredProducts ({ products }) {
  const { filters } = useFilters()

  const filterByPrice = ({ products }) => {
    return products.filter(product => {
      return product.price >= filters.minPrice
    })
  }

  const filterByCategory = ({ products }) => {
    return products.filter(product => {
      if (filters.category === 'all') return true
      return product.category === filters.category
    })
  }

  const filteredProducts = useMemo(() => {
    let productsToShow = [...products]
    productsToShow = filterByPrice({ products: productsToShow })
    productsToShow = filterByCategory({ products: productsToShow })
    return new Set(productsToShow)
  }, [filters, products])

  return { filteredProducts }
}
