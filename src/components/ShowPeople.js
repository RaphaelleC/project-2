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
  }, [peopleId])

  return (
    <section className="section">
      <div className="container">
        {people ? (
          <div key={people.id}>
            <h2 className="title has-text-centered">{people.name}</h2>
            <div className="columns">
              <div className="column is-half">
                <h4>Eye color : {people.eye_color}</h4>
                <h4>Hair color : {people.hair_color}</h4>
              </div>
              <div className="column is-half">
                {people.name === 'Pazu' && <img src="https://i.imgur.com/EquTNn1.png" alt="Pazu" />}
                {people.name === 'Lusheeta Toel Ul Laputa' && <img src="https://i.imgur.com/iu2Slfz.png" alt="Lusheeta" />}
                {people.name === 'Dola' && <img src="https://i.imgur.com/io0DL5p.jpg" alt="Dola" />}
                {people.name === 'Romska Palo Ul Laputa' && <img src="https://i.imgur.com/OMi0UpQ.jpg" alt="Romska" />}
                {people.name === 'Uncle Pom' && <img src="https://i.imgur.com/wwKvz7i.png" alt="Uncle Pom" />}
                {people.name === 'General Muoro' && <img src="https://i.imgur.com/K1ngQs1.jpg" alt="General Muoro" />}
                {people.name === 'Duffi' && <img src="https://i.imgur.com/GIUE2bn.png" alt="Duffi" />}
                {people.name === 'Louis' && <img src="https://i.imgur.com/0gc8NW4.jpg" alt="Louis" />}
                {people.name === 'Charles' && <img src="https://i.imgur.com/4ZHa5A7.jpg" alt="Charles" />}
                {people.name === 'Henri' && <img src="https://i.imgur.com/WJeonF9.jpg" alt="Henri" />}
                {people.name === 'Motro' && <img src="https://i.imgur.com/Pjvq7is.jpg" alt="Motro" />}
                {people.name === 'Okami' && <img src="https://i.imgur.com/FPNZ0m8.jpg" alt="Okami" />}
                {people.name === 'Ashitaka' && <img src="https://i.imgur.com/hnFj4F1.jpg" alt="Ashitaka" />}
                {people.name === 'San' && <img src="https://i.imgur.com/ExmPtPV.jpg" alt="San" />}
                {people.name === 'Eboshi' && <img src="https://i.imgur.com/Ih0wb4D.jpg" alt="Eboshi" />}
                {people.name === 'Jigo' && <img src="https://i.imgur.com/bskFrxX.jpg" alt="Jigo" />}
                {people.name === 'Kohroku' && <img src="https://i.imgur.com/LETDq5G.png" alt="Kohroku" />}
                {people.name === 'Gonza' && <img src="https://i.imgur.com/KaJTeVN.jpg" alt="Gonza" />}
                {people.name === 'Hii-sama' && <img src="https://i.imgur.com/elg9vuz.png" alt="Hii-sama" />}
                {people.name === 'Yakul' && <img src="https://i.imgur.com/aaiIH2R.jpg" alt="Yakul" />}
                {people.name === 'Shishigami' && <img src="https://i.imgur.com/hxzwxoj.png" alt="Shishigami" />}
                {people.name === 'Moro' && <img src="https://i.imgur.com/JFyOIX4.jpg" alt="Moro" />}
                {people.name === 'Jiji' && <img src="https://i.imgur.com/r6ChdSc.jpg" alt="Jiji" />}
                {people.name === 'Satsuki Kusakabe' && <img src="https://i.imgur.com/WhqWgvh.png" alt="Satsuki Kusakabe" />}
                {people.name === 'Mei Kusakabe' && <img src="https://i.imgur.com/Q0jz8fY.png" alt="Mei Kusakabe" />}
                {people.name === 'Tatsuo Kusakabe' && <img src="https://i.imgur.com/KfBPKJS.jpg" alt="Tatsuo Kusakabe" />}
                {people.name === 'Yasuko Kusakabe' && <img src="https://i.imgur.com/gJjHz0o.jpg" alt="Yasuko Kusakabe" />}
                {people.name === 'Granny' && <img src="https://i.imgur.com/dFDtfc0.jpg" alt="Granny" />}
                {people.name === 'Kanta Ogaki' && <img src="https://i.imgur.com/9LSFfhF.jpg" alt="Kanta Ogaki" />}
                {people.name === 'Totoro' && <img src="https://i.imgur.com/ce1kft3.jpg" alt="Totoro" />}
                {people.name === 'Chu Totoro' && <img src="https://i.imgur.com/Ced7Pxy.jpg" alt="Chu Totoro" />}
                {people.name === 'Chibi Totoro' && <img src="https://i.imgur.com/6DUBtmz.jpg" alt="Chibi Totoro" />}
                {people.name === 'Catbus' && <img src="https://i.imgur.com/zXBfbQj.jpg" alt="Catbus" />}
                {people.name === 'Niya' && <img src="https://i.imgur.com/4VLipQk.jpg" alt="Niya" />}
                {people.name === 'Renaldo Moon aka Moon aka Muta' && <img src="https://i.imgur.com/F2daCVy.png" alt="Muta" />}
                {people.name === 'Cat King' && <img src="https://i.imgur.com/6XXh7WS.jpg" alt="Cat King" />}
                {people.name === 'Yuki' && <img src="https://i.imgur.com/YQKsPuE.png" alt="Yuki" />}
                {people.name === 'Haru' && <img src="https://i.imgur.com/BIAip6S.jpg" alt="Haru" />}
                {people.name === 'Baron Humbert von Gikkingen' && <img src="" alt="Baron Humbert von Gikkingen" />}
                {people.name === 'Natori' && <img src="https://i.imgur.com/Xuz750T.jpg" alt="Natori" />}
                {people.name === 'Colonel Muska' && <img src="https://i.imgur.com/OMi0UpQ.jpg" alt="Colonel Muska" />}
                {people.name === 'Porco Rosso' && <img src="https://i.imgur.com/7I4GsRC.jpg" alt="Porco Rosso" />}
                {people.name === 'Sosuke' && <img src="https://i.imgur.com/3pJCOSD.jpg" alt="Sosuke" />}
              </div>
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