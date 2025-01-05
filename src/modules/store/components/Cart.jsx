import { useId } from 'react'
import useCart from '../hooks/useCart'
import { ProductsInCart } from './ProductsInCart'
import '../css/Cart.css'

export function Cart () {
  const cartCheckBoxId = useId()
  const { emptyCart } = useCart()

  return (
    <section className='cart'>
      <label className='cart-button-show' htmlFor={cartCheckBoxId}>🛒</label>
      <input style={{ display: 'none' }} type='checkbox' id={cartCheckBoxId} />
      <section className='cart-content'>
        <header style={{ marginBottom: '.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4>Carrito 🛒</h4>
          <label style={{ cursor: 'pointer' }} htmlFor={cartCheckBoxId}>❌</label>
        </header>
        <section>
          <ProductsInCart />
        </section>
        <footer>
          <button onClick={emptyCart}>
            Limpiar carrito ♻️
          </button>
        </footer>
      </section>
    </section>
  )
}
