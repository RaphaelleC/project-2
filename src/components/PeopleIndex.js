import React from 'react'
import PeopleCard from './PeopleCard'
import { getAllPeople } from '../lib/api'

function PeopleIndex() {
  const [people, setPeople] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllPeople()
      setPeople(response.data)
    }
    getData()
  }, [])

  return (
    <section className="section people-index-background">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Characters Index</h1>
        <div className="columns is-multiline">
          {people ? (
            people.map(peep =>
              <PeopleCard key={peep.id} {...peep} />
            )
          ) : (
            <p>...loading</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PeopleIndex