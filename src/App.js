import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './common/Home'
import Nav from './common/Nav'
import Search from './components/Search'
import FilmIndex from './components/FilmIndex'
import ShowFilm from './components/ShowFilm'
import PeopleIndex from './components/PeopleIndex'
import ShowPeople from './components/ShowPeople'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/people/:peopleId" component={ShowPeople}/>
        <Route path="/peopleindex" component={PeopleIndex}/>
        <Route path="/films/:filmId" component={ShowFilm}/>
        <Route path="/filmindex" component={FilmIndex}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
