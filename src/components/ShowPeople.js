import React from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePerson } from '../lib/api'

function ShowPeople() {
  const { peopleId } = useParams()
  const [people, setPeople] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSinglePerson(peopleId)
        setPeople(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  } ,[peopleId])

  return (
    <section className="section">
      <div className="container">
        {people ? (
          <div key={people.id}>
            <h2 className="title has-text-centered">{people.name}</h2>
            <div className="column">
              <h4>Eye color : {people.eye_color}</h4>
              <h4>Hair color : {people.hair_color}</h4>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )
}

export default ShowPeople