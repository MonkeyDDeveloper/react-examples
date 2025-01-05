import useCart from '../hooks/useCart'

function CartItem ({ item, onAddToCart, onRemoveFromCart }) {
  return (
    <li className='cart-item'>
      <img src={item.image} alt={item.description} />
      <section className='cart-item-info'>
        <strong>{item.title}</strong>
      </section>
      <footer className='cart-item-actions'>
        <button onClick={onRemoveFromCart}>
          {item.quantity <= 1 ? '❌' : '➖'}
        </button>
        <small>
          Cantidad: {item.quantity || 0}
        </small>
        <button onClick={onAddToCart}>
          ➕
        </button>
      </footer>
    </li>
  )
}
export function ProductsInCart () {
  const { products, addToCart, removeFromCart } = useCart()
  return (
    <ul>
      {products.map((product) => (
        <CartItem key={product.id} item={product} onAddToCart={() => addToCart(product)} onRemoveFromCart={() => removeFromCart(product.id)} />
      ))}
    </ul>
  )
}
