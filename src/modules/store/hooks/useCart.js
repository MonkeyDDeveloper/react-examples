import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, resetCart } from '../../../store/products/cart'

export default function useCart () {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  const removeFromCart = (productId) => {
    dispatch(removeItem(productId))
  }

  const emptyCart = () => {
    dispatch(resetCart())
  }

  return {
    addToCart,
    emptyCart,
    removeFromCart,
    products: cart.cart.products
  }
}
