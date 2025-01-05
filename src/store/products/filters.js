import { createSlice } from '@reduxjs/toolkit'

const initialFilterState = {
  filters: {
    minPrice: 0,
    category: 'all'
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    updateFilters (state, newFilters) {
      state.filters = newFilters.payload
    }
  }
})

export const { updateFilters } = filterSlice.actions

export default filterSlice.reducer
