# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 2: Ghiblipedia

by [Raphaëlle Charrier](https://github.com/RaphaelleC) and [Antoinette Demonceaux](https://github.com/Ant0inette).

Ghiblipedia is a website referencing movies and characters from the Ghibli Studio, using a [public API](https://ghibliapi.herokuapp.com/).

<img src="./screenshots/Homepage.png" alt="Homepage"/>

## Content

- [Project Brief](#project-brief)
- [Approach](#approach)
- [Technologies](#technologies-used)
- [Responsibilities](#responsibilities)
- [Key Learnings](#key-learnings)
- [Achivements](#achievements)
- [Challenges](#challenges)
- [Conclusions](#conclusions)

## Project Brief

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app can have a router** - with several "pages", this is up to your disgression and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public.

## Approach

For this project, we worked together on the same directory using VSCode live share option. We divided our tasks so we didn't have to work on the same file at the same time.<br>

Given that we only had 2 days to complete this project, we decided to take up to 2 hours to find an API we would both be happy with.

We then decided on what we wanted to build with the API : a homepage, 2 "lists" pages (one listing the characters, the other listing the movies) and a search page. After that, we divided the work between us and started working on it while being on constant communication.

## Technologies

<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/><br>
<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/><br>
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/><br>
* SASS
* Axios
* Bulma

## Responsibilities

### Characters showcase

I have been in charge of the characters listing and showcase of our website, as well as its styling.<br>

First, I had to get the data from the API in order to use it :

```javascript
export function getAllPeople() {
  return axios.get(`${baseUrl}/people`)
}

export function getSinglePerson(peopleId) {
  return axios.get(`${baseUrl}/people/${peopleId}`)
}
```

And then display the data like a catalog of characters :

```js
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
```

I used the map method with the `PeopleCard` so that all the characters are displayed evenly on a card with their details (name and picture). We can click on each card to go to the character's page that contains more informations. I used this function to get a single character from the API :

```js
export function getSinglePerson(peopleId) {
  return axios.get(`${baseUrl}/people/${peopleId}`)
}
```

And this function to display the properties of each characters on a page :

```js
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
  }, [peopleId])
```

### Home and search pages

Antoinette and I worked on the home page and the search page together.

We handled the search bar with the filter method for each category (character or movie), with a `clear` button to delete the search term :
```javascript
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
```

When the search bar is empty, the search page shows every character and movie the API contains, and when the users starts typing what they're looking for, the functions filters all that corresponds to the search term.

### Styling

I have styled the pages I have created, using custom CSS classes and the Bulma library.

<img src="./screenshots/Characters_index.png" alt="characters index"/>

## Key Learnings

This project made me more confortable using React and building a simple website, as well as getting data from an API.

We also came to the conclusion that the choice of an API is not easy and that we could have chosen a better one. For the movies and characters, we realized that there was no image listed on this API, and it was too late to choose a different one. So we decided to go 'the hard way' and uploaded images we found on the internet to Imgur to be able to use them on our website. We didn't want our website to be just plain text.

## Achievements

- Building and deployment of a React app
- Usage of a free and open source API

## Challenges

For me, the biggest challenge of this project was working on the same directory on pairing. Even if we separated the workload so we didn't have to work on the exact same file at the same time, when we wanted to test if what we implemented was working it was difficult to do so as we were both testing things from the same directory, so if one of us had an error it would show on the other person's screen and we had to wait for the error to be corrected before being able to properly test. Fortunately, we kept a great communication between each other so we knew when the other had an issue and when not, so we could help and be able to test our implementations without losing a lot of time.

## Conclusions

I've been able to consolidate my skills with React on this project, and feel confortable moving forward in the course as we're going to start learning Node. It will be interesting to link React and Node together.