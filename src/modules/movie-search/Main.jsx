import React, { useCallback } from 'react'
import Movies from './components/Movie'
import { useMovies } from './hooks/useMovies'
import { useSearchMovies } from './hooks/useSearchMovies'
import debounce from 'just-debounce-it'

export default function MovieSearcher () {
  const { setSearch, error } = useSearchMovies()
  const { movies, setLookFor, error: getMovieError } = useMovies()

  const debouncedSetLookFor = useCallback(debounce((search) => {
    setLookFor(search)
  }, 500), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new window.FormData(event.target)
    const newSearch = form.get('search')
    setSearch(newSearch)
    setLookFor(newSearch)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedSetLookFor(newSearch)
  }

  return (
    <section className='movie-searcher'>
      <h1>
        Movie searcher
      </h1>
      <p>We search movies using fetch on the api of omdb, and we implement debounce functions to improve the searching.</p>
      <section>
        <form className='form' onSubmit={handleSubmit}>
          <section className='form-group'>
            <label htmlFor='search'>
              <input onChange={handleChange} name='search' placeholder='Avengers, Shrek' />
            </label>
            <button type='submit'>Search</button>
          </section>
          {error && <p>{error}</p>}
          {getMovieError && <p>{getMovieError}</p>}
        </form>
      </section>
      <section>
        <Movies movies={movies} />
      </section>
    </section>
  )
}
