import '../css/Products.css'
import useFilteredProducts from '../hooks/useFilteredProducts'
import useCart from '../hooks/useCart'

export function Products ({ products }) {
  const { filteredProducts } = useFilteredProducts({ products })
  const { addToCart, products: cartProducts } = useCart()

  const isInCart = product => {
    return cartProducts.some(item => item.id === product.id)
  }

  return (
    <ul className='products'>
      {products.map(product => {
        return (
          <li key={product.id} className={filteredProducts.has(product) ? 'product product-visible' : 'product-hidden'}>
            <section>
              <header>
                {product.title} - ${product.price}
              </header>
              <section>
                <img src={product.image} alt={product.description} loading='lazy' />
              </section>
              <section>
                <button onClick={() => addToCart(product)} className='product-button'>{isInCart(product) ? 'Currently in cart' : 'Add to cart 🛒'}</button>
              </section>
            </section>
          </li>
        )
      })}
    </ul>
  )
}
