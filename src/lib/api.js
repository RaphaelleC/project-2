import axios from 'axios'

const baseUrl = 'https://ghibliapi.herokuapp.com'

export function getAllFilms() {
  return axios.get(`${baseUrl}/films`)
}

export function getSingleFilm(filmId) {
  return axios.get(`${baseUrl}/films/${filmId}`)
}
export function getAllPeople() {
  return axios.get(`${baseUrl}/people`)
}

export function getSinglePerson(peopleId) {
  return axios.get(`${baseUrl}/people/${peopleId}`)
}
