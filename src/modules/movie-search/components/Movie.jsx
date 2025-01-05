import '../css/Movie.css'

function movieList ({ movies }) {
  return (
    <ul className='movies'>
      {
         movies.map((movie) => {
           return (
             <li className='movie' key={movie.id}>
               <header>
                 <h2>
                   {movie.title}
                 </h2>
                 <p>
                   {movie.year}
                 </p>
               </header>
               <img src={movie.poster} alt={movie.title} />
             </li>
           )
         })
        }
    </ul>
  )
}

function noMoviesMessage () {
  return <p>No movies found</p>
}

export default function Movies ({ movies }) {
  return (
    <>
      {
        movies
          ? movieList({ movies })
          : noMoviesMessage()
      }
    </>
  )
}
