import { useDispatch, useSelector } from 'react-redux'
import { updateFilters } from '../../../store/products/filters'
export default function useFilters () {
  const filters = useSelector(state => state.filters.filters)
  const dispatch = useDispatch()

  const setNewFilters = (newFilters) => {
    dispatch(updateFilters(newFilters))
  }

  return {
    filters,
    setNewFilters
  }
}
