import { Link } from 'react-router-dom'

function FilmCard({ id, title, releaseDate, originalTitle }) {
  console.log(id, title, location, originalTitle)
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/films/${id}`}>
        <div className="card-header">
          <div className="card has-text-centered">
            <h3 className="card-header-title is-3">{originalTitle}</h3>
            <h3 className="card-header-title is-3">{title}</h3>
            <div className="card-content">
              <h6 className="subtitle is-6">{releaseDate}</h6>
              <figure className="image">
                {title === 'Castle in the Sky' && <img src="https://i.imgur.com/SsPhX3c.jpg" alt="Castle in the Sky" />}
                {title === 'Grave of the Fireflies' && <img src="https://i.imgur.com/GnuOYZW.jpg" alt="Grave of the Fireflies" />}
                {title === 'My Neighbor Totoro' && <img src="https://i.imgur.com/g1FOkjJ.jpg" alt="My Neighbor Totoro" />}
                {title === 'Kiki\'s Delivery Service' && <img src="https://i.imgur.com/vhikWAd.jpg" alt="Kiki`s Delivery Service" />}
                {title === 'Only Yesterday' && <img src="https://i.imgur.com/P99ZVKN.jpg" alt="Only Yesterday" />}
                {title === 'Porco Rosso' && <img src="https://i.imgur.com/9XKhywA.jpg" alt="Porco Rosso" />}
                {title === 'Pom Poko' && <img src="https://i.imgur.com/grYtoWy.png" alt="Pom Poko" />}
                {title === 'Whisper of the Heart' && <img src="https://i.imgur.com/YrPD4wa.jpg" alt="Whisper of the Heart" />}
                {title === 'Princess Mononoke' && <img src="https://i.imgur.com/r2h0Jyq.jpg" alt="Princess Mononoke" />}
                {title === 'My Neighbors the Yamadas' && <img src="https://i.imgur.com/hXhLyZh.jpg" alt="My Neighbors the Yamadas" />}
                {title === 'Spirited Away' && <img src="https://i.imgur.com/hM1d3nA.png" alt="Spirited Away" />}
                {title === 'The Cat Returns' && <img src="https://i.imgur.com/Zo9e8fX.jpg" alt="The Cat Returns" />}
                {title === 'Howl\'s Moving Castle' && <img src="https://i.imgur.com/TmGjfsW.jpg" alt="Howl`s Moving Castle" />}
                {title === 'Tales from Earthsea' && <img src="https://i.imgur.com/4coghGk.jpg" alt="Tales from Earthsea" />}
                {title === 'Ponyo' && <img src="https://i.imgur.com/h5McjoZ.jpg" alt="Ponyo" />}
                {title === 'Arrietty' && <img src="https://i.imgur.com/j5Z5Yco.png" alt="Arrietty" />}
                {title === 'From Up on Poppy Hill' && <img src="https://i.imgur.com/aGDT8CN.png" alt="From Up on Poppy Hill" />}
                {title === 'The Wind Rises' && <img src="https://i.imgur.com/zCnoxr1.png" alt="The Wind Rises" />}
                {title === 'The Tale of the Princess Kaguya' && <img src="https://i.imgur.com/NpiJsgk.png" alt="The Tale of the Princess Kaguya" />}
                {title === 'When Marnie Was There' && <img src="https://i.imgur.com/YeaC2N4.jpg" alt="When Marnie Was There" />}
                {title === 'The Red Turtle' && <img src="https://i.imgur.com/3QtdoSH.png" alt="The Red Turtle" />}
              </figure>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FilmCard