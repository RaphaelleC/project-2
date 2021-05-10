import { Link } from 'react-router-dom'

function PeopleCard({ id, name }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/people/${id}`}>
        <div className="card-header">
          <div className="card has-text-centered">
            <div className="card-content">
              <h3 className="subtitle">{name}</h3>
              <img src="https://i.imgur.com/67t3JXn.jpg" alt="Ghibli characters"/>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PeopleCard