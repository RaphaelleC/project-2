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
                {film.title === 'Grave of the Fireflies' && <img src="https://i.imgur.com/GnuOYZW.jpg" alt="Grave of the Fireflies" />}
                {film.title === 'My Neighbor Totoro' && <img src="https://i.imgur.com/g1FOkjJ.jpg" alt="My Neighbor Totoro" />}
                {film.title === 'Kiki\'s Delivery Service' && <img src="https://i.imgur.com/vhikWAd.jpg" alt="Kiki`s Delivery Service" />}
                {film.title === 'Only Yesterday' && <img src="https://i.imgur.com/P99ZVKN.jpg" alt="Only Yesterday" />}
                {film.title === 'Porco Rosso' && <img src="https://i.imgur.com/9XKhywA.jpg" alt="Porco Rosso" />}
                {film.title === 'Pom Poko' && <img src="https://i.imgur.com/grYtoWy.png" alt="Pom Poko" />}
                {film.title === 'Whisper of the Heart' && <img src="https://i.imgur.com/YrPD4wa.jpg" alt="Whisper of the Heart" />}
                {film.title === 'Princess Mononoke' && <img src="https://i.imgur.com/r2h0Jyq.jpg" alt="Princess Mononoke" />}
                {film.title === 'My Neighbors the Yamadas' && <img src="" alt="My Neighbors the Yamadas" />}
                {film.title === 'Spirited Away' && <img src="https://i.imgur.com/hM1d3nA.png" alt="Spirited Away" />}
                {film.title === 'The Cat Returns' && <img src="https://i.imgur.com/Zo9e8fX.jpg" alt="The Cat Returns" />}
                {film.title === 'Howl\'s Moving Castle' && <img src="https://i.imgur.com/TmGjfsW.jpg" alt="Howl`s Moving Castle" />}
                {film.title === 'Tales from Earthsea' && <img src="https://i.imgur.com/4coghGk.jpg" alt="Tales from Earthsea" />}
                {film.title === 'Ponyo' && <img src="https://i.imgur.com/h5McjoZ.jpg" alt="Ponyo" />}
                {film.title === 'Arietty' && <img src="https://i.imgur.com/j5Z5Yco.png" alt="Arietty" />}
                {film.title === 'From up on Poppy Hill' && <img src="https://i.imgur.com/aGDT8CN.png" alt="From up on Poppy Hill" />}
                {film.title === 'The Wind Rises' && <img src="https://i.imgur.com/zCnoxr1.png" alt="The Wind Rises" />}
                {film.title === 'The Tale of the Princess' && <img src="https://i.imgur.com/NpiJsgk.png" alt="The Tale of the Princess" />}
                {film.title === 'When Marnie Was There' && <img src="https://i.imgur.com/YeaC2N4.jpg" alt="When Marnie Was There" />}
                {film.title === 'The Red Turtle' && <img src="https://i.imgur.com/3QtdoSH.png" alt="The Red Turtle" />}
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