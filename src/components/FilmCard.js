import { Link } from 'react-router-dom'

function FilmCard({ id, title }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/films/${id}`}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-header-title">{title}</h3>
            <div className="card-image">
              <div className="card-content">
                <img src="https://i.guim.co.uk/img/media/da01a9959107c4fb0abb65fa8840ae01bbb24dfa/7_81_4761_2856/master/4761.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=4875a560cce8dc397467778c3c751b8a" alt={title} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FilmCard