import React from 'react'
import FilmCard from './FilmCard'
import { getAllFilms } from '../lib/api'


function FilmIndex() {
  const [films, setFilm] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllFilms()
      setFilm(res.data)
    }
    getData()
  }, [])
  console.log(films)
  return (
    <section className="section film-index-background">
      <div className="container">
        <h1 className=" title is-1 has-text-centered ">Film Index</h1>
        <div className="columns is-multiline">
          {films ? (
            films.map(film =>
              <FilmCard key={film.id}
                id={film.id}
                title={film.title}
                releaseDate={film.release_date}
                originalTitle={film.original_title}
              />)
          ) : (
            <p>...loading</p>
          )}

        </div>
      </div>
    </section>
  )
}


export default FilmIndex