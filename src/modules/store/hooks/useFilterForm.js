import { useEffect, useState, useRef, useCallback } from 'react'
import useFilters from './useFilters'
import debounce from 'just-debounce-it'

export default function useFilterForm ({ filterFormId }) {
  const { setNewFilters, filters } = useFilters()

  const [minPriceValue, setMinPriceValue] = useState(filters.minPrice)
  const filtersForm = useRef(null)

  const handleSubmitDebounce = useCallback(debounce(() => {
    if (!filtersForm.current) return
    const filtersFormData = new window.FormData(filtersForm.current)
    const filtersObject = Object.fromEntries(filtersFormData.entries())
    const newFilters = {
      ...filters,
      ...filtersObject
    }
    setNewFilters(newFilters)
  }, 300), [])

  const SET_VALUE_ACTIONS = {
    minPrice: setMinPriceValue,
    default: () => { }
  }

  const handleChange = (event, setValue = 'default') => {
    const updateFormValue = SET_VALUE_ACTIONS[setValue]
    updateFormValue(event.target.value)
    handleSubmitDebounce()
  }

  useEffect(() => {
    filtersForm.current = document.getElementById(filterFormId)
  }, [])

  return {
    minPriceValue,
    handleChange
  }
}
