# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project 2: Ghiblipedia

by [Raphaëlle Charrier](https://github.com/RaphaelleC) and [Antoinette Demonceaux](https://github.com/Ant0inette).

Ghiblipedia is a website referencing movies and characters from the Ghibli Studio, using a [public API](https://ghibliapi.herokuapp.com/).

![Homepage](./screenshots/Homepage.png)

## Content

- [Project Brief](#project-brief)
- [Approach](#approach)
- [Technologies](#technologies-used)
- [Responsibilities](#responsibilities)
- [Key Learnings](#key-learnings)
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

```javascript
export function getAllPeople() {
  return axios.get(`${baseUrl}/people`)
}

export function getSinglePerson(peopleId) {
  return axios.get(`${baseUrl}/people/${peopleId}`)
}
```

I used the functions above to get the data from the API and use it on our app :

```javascript
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

### Home and search pages

Antoinette and I worked on the home page and the search page together.

We handled the search bar this way, with a clear button to delete the search term :
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

### Styling

I have styled the pages I have implemented, using CSS and the Bulma library.

![Characters_index](./screenshots/Characters_index.png)

## Key Learnings

This project made me more confortable using React and building a simple website, as well as getting data from an API.

We also came to the conclusion that the choice of an API is not easy and that we could have chosen a better one. For the movies and characters, we realized that there was no image listed on this API, and it was too late to choose a different one. So we decided to go 'the hard way' and uploaded images we found on the internet to Imgur to be able to use them on our website. We didn't want our website to be just plain text.


## Conclusions

I've been able to consolidate my skills with React on this project, and feel confortable moving forward in the course as we're going to start learning Node. It will be interesting to link React and Node together.