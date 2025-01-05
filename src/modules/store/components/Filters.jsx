import useFilters from '../hooks/useFilters'
import useFilterForm from '../hooks/useFilterForm'
import { useId } from 'react'
export function Filters () {
  const { filters } = useFilters()
  const categoryId = useId()
  const minPriceId = useId()
  const filterFormId = useId()
  const { handleChange, minPriceValue } = useFilterForm({ filterFormId })

  return (
    <section>
      <h3>Filtros</h3>
      <form id={filterFormId}>
        <label htmlFor={minPriceId}>
          <section style={{ display: 'flex', gap: '.5rem' }}>
            Precio mínimo: ${minPriceValue} 💸
            <input id={minPriceId} name='minPrice' type='range' min='0' max='1000' defaultValue={filters.minPrice} onChange={(event) => handleChange(event, 'minPrice')} />
          </section>
        </label>
        <label htmlFor={categoryId}>
          {/* create a select with category */}
          <select id={categoryId} name='category' defaultValue={filters.category} onChange={handleChange}>
            <option value='all'>Todas</option>
            <option value="men's clothing">Ropa de hombre</option>
            <option value='jewelery'>Joyería</option>
            <option value='electronics'>Electrónicos</option>
          </select>
        </label>
      </form>
    </section>
  )
}
