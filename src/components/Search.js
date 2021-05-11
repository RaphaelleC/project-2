import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search () {
  const [people, setPeople] = React.useState(null)
  const [films, setFilms] = React.useState(null)
  const [searchTerm, setSearchTerm] = React.useState('')
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://ghibliapi.herokuapp.com/people')
      setPeople(res.data)
    }
    getData()
  }, [])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://ghibliapi.herokuapp.com/films')
      setFilms(res.data)
    }
    getData()
  }, [])
  
  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  const filteredPeople = people?.filter((peep) => {
    return (
      peep.name.toLowerCase().includes(searchTerm)
    )
  })

  const filteredFilms = films?.filter((film) => {
    return (
      film.title.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <section className="section search-background">
      <div className="container">
        <input
          className="input is-medium is-success"
          placeholder="Find any Ghibli film or character..."
          onChange={handleInput}
          value={searchTerm}
        />
        <button className="button" type="button" onClick={handleClear}>Clear</button>
      </div>
      <div className="container">
        <div className="people">
          <div className="columns is-multiline">
            {filteredPeople ? (
              filteredPeople.map(peep => (
                <div key={peep.name} className="column is-one-quarter-desktop is-one-third-tablet">
                  <Link to={`/people/${peep.id}`}>
                    <div className="card-header">
                      <div className="card has-text-centered">
                        <div className="card-content has-background-white">
                          <h3 className="subtitle">{peep.name}</h3>
                          <img src="https://i.imgur.com/67t3JXn.jpg" alt="Ghibli characters"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>...loading</p>
            )}
            {filteredFilms ? (
              filteredFilms.map(film => (
                <div key={film.title} className="column is-one-quarter-desktop is-one-third-tablet">
                  <Link to={`/people/${film.id}`}>
                    <div className="card-header">
                      <div className="card has-text-centered">
                        <div className="card-content has-background-white">
                          <h3 className="subtitle">{film.title}</h3>
                          <img src="https://i.guim.co.uk/img/media/da01a9959107c4fb0abb65fa8840ae01bbb24dfa/7_81_4761_2856/master/4761.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=4875a560cce8dc397467778c3c751b8a" alt={film.title} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>...loading</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Search