import products from './mocks/products.json'
import { Products } from './components/Products'
import { Filters } from './components/Filters'
import { Cart } from './components/Cart'

export default function Store () {
  return (
    <section>
      <header style={{ textAlign: 'center', fontSize: '2rem' }}>
        <h1>Store here 🏪</h1>
        <p style={{ fontSize: '1rem' }}>Simple store that uses redux toolkit and custom hooks to keep sync the cart and the items in the grid.</p>
      </header>
      <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
        <Filters />
        <Cart />
      </section>
      <main>
        <Products products={products} />
      </main>
    </section>
  )
}
