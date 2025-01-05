import { useEffect, useState } from 'react'

export function useSearchMovies () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  useEffect(() => {
    if (search.startsWith('%')) {
      setError('Search cannot start with %')
      return
    }

    setError(null)
  }, [search])

  return {
    search,
    setSearch,
    error
  }
}
