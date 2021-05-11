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
          <div key={film.id}>
            <h2 className="title has-text-centered">{film.title}</h2>
            <hr />
            <div className="columns">
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
            <div className="column is-half">
              <figure className="image">
                {film.title === 'Castle in the Sky' && <img src="https://i.imgur.com/SsPhX3c.jpg" alt="Castle in the Sky" />}
                {film.title === 'Grave of the Fireflies' && <img src="" alt="Castle in the Sky" />}
                {film.title === 'My Neighbour Totoro' && <img src="" alt="My Neighbour Totoro" />}
                {film.title === 'Kiki\'s Delivery Service' && <img src="" alt="Kiki`s Delivery Service" />}
                {film.title === 'Only Yesterday' && <img src="" alt="Only Yesterday" />}
                {film.title === 'Porco Rosso' && <img src="" alt="Porco Rosso" />}
                {film.title === 'Pom Poko' && <img src="" alt="Pom Poko" />}
                {film.title === 'Whisper of the Heart' && <img src="" alt="Whisper of the Heart" />}
                {film.title === 'Princess Mononoke' && <img src="" alt="Princess Mononoke" />}
                {film.title === 'My Neighbours the Yamadas' && <img src="" alt="My Neighbours the Yamadas" />}
                {film.title === 'Spirited Away' && <img src="" alt="Spirited Away" />}
                {film.title === 'The Cat Returns' && <img src="" alt="The Cat Returns" />}
                {film.title === 'Howl\'s Moving Castle' && <img src="" alt="Howl`s Moving Castle" />}
                {film.title === 'Tales from Earthsea' && <img src="" alt="Tales from Earthsea" />}
                {film.title === 'Ponyo' && <img src="" alt="Ponyo" />}
                {film.title === 'Arietty' && <img src="" alt="Arietty" />}
                {film.title === 'From up on Poppy Hill' && <img src="" alt="From up on Poppy Hill" />}
                {film.title === 'The Wind Rises' && <img src="" alt="The Wind Rises" />}
                {film.title === 'The Tale of the Princess' && <img src="" alt="The Tale of the Princess" />}
                {film.title === 'When Marnie Was There' && <img src="" alt="When Marnie Was There" />}
                {film.title === 'The Red Turtle' && <img src="" alt="The Red Turtle" />}
              </figure>
            </div>
          </div>



        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )
}

export default ShowFilm