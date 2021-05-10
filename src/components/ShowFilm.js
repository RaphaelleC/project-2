import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleFilm } from '../lib/api'

function ShowFilm() {
  const { filmId } = useParams()
  const [film, setFilm] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleFilm(filmId)
        setFilm(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [filmId])

  return (
    <section className="section">
      <div className="container">
        {film ? (
          <div>
            <h2 className="title has-text-centered">{film.title}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                {/* {/! image goes here */} 
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  {film.original_title}{film.original_title_romanised}
                </h4>
                <hr />
                <h4>Directed by {film.director} and produced by {film.producer}</h4>
                <hr />
                <p>Synopsis: {film.description} </p>
                <hr />
                <h4> Released in {film.release_date}</h4>
              </div>
            </div>
          </div>
        ) : (
          <p> ...loading </p>
        )}
      </div>
    </section>
  )
}

export default ShowFilm