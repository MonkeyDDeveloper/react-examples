import { useEffect, useState } from 'react'
import { getMovies } from '../services'
export function useMovies () {
  const [search, setLookFor] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getMovies({ search })
      .then((movies) => {
        if (!movies.success) {
          console.log(movies.error)
          setError('There was an error fetching the movies')
          return
        }
        setError(null)
        setMovies(movies.data)
      })
  }, [search])

  return {
    movies,
    setLookFor,
    error
  }
}
