import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  const [isOpen, setIsOpen ] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (

    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            🌞
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          />

        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/filmindex" className="navbar-item">
              Films
            </Link>
            <Link to="/peopleindex" className="navbar-item">
              Characters
            </Link>
            <Link to="/search" className="navbar-item">
              Search
            </Link>
            <div className="navbar-end">
            </div>  
          </div>
        </div>
      </div>       
    </nav>
  )
}

export default Nav
