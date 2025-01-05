export async function getMovies ({ search }) {
  const MOVIE_URI = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY_MOVIES}&s=${search}`

  try {
    if (!search) {
      return {
        success: true,
        data: []
      }
    }
    const response = await fetch(`${MOVIE_URI}`)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.Error || 'Error fetching movies')
    }
    const movies = data.Search || []
    const mappedMoviees = movies.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    })
    return {
      success: true,
      data: mappedMoviees
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
