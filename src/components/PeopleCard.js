import { Link } from 'react-router-dom'

function PeopleCard({ id, name }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/people/${id}`}>
        <div className="card-header">
          <div className="card has-text-centered">
            <div className="card-content has-background-white">
              <h3 className="subtitle">{name}</h3>
              <figure className="image is-fullwidth">
                {name === 'Pazu' && <img src="https://i.imgur.com/EquTNn1.png" alt="Pazu" />}
                {name === 'Lusheeta Toel Ul Laputa' && <img src="https://i.imgur.com/iu2Slfz.png" alt="Lusheeta" />}
                {name === 'Dola' && <img src="https://i.imgur.com/io0DL5p.jpg" alt="Dola" />}
                {name === 'Romska Palo Ul Laputa' && <img src="https://i.imgur.com/OMi0UpQ.jpg" alt="Romska" />}
                {name === 'Uncle Pom' && <img src="https://i.imgur.com/wwKvz7i.png" alt="Uncle Pom" />}
                {name === 'General Muoro' && <img src="https://i.imgur.com/K1ngQs1.jpg" alt="General Muoro" />}
                {name === 'Duffi' && <img src="https://i.imgur.com/GIUE2bn.png" alt="Duffi" />}
                {name === 'Louis' && <img src="https://i.imgur.com/0gc8NW4.jpg" alt="Louis" />}
                {name === 'Charles' && <img src="https://i.imgur.com/4ZHa5A7.jpg" alt="Charles" />}
                {name === 'Henri' && <img src="https://i.imgur.com/WJeonF9.jpg" alt="Henri" />}
                {name === 'Motro' && <img src="https://i.imgur.com/Pjvq7is.jpg" alt="Motro" />}
                {name === 'Okami' && <img src="https://i.imgur.com/FPNZ0m8.jpg" alt="Okami" />}
                {name === 'Ashitaka' && <img src="https://i.imgur.com/hnFj4F1.jpg" alt="Ashitaka" />}
                {name === 'San' && <img src="https://i.imgur.com/ExmPtPV.jpg" alt="San" />}
                {name === 'Eboshi' && <img src="https://i.imgur.com/Ih0wb4D.jpg" alt="Eboshi" />}
                {name === 'Jigo' && <img src="https://i.imgur.com/bskFrxX.jpg" alt="Jigo" />}
                {name === 'Kohroku' && <img src="https://i.imgur.com/LETDq5G.png" alt="Kohroku" />}
                {name === 'Gonza' && <img src="https://i.imgur.com/KaJTeVN.jpg" alt="Gonza" />}
                {name === 'Hii-sama' && <img src="https://i.imgur.com/elg9vuz.png" alt="Hii-sama" />}
                {name === 'Yakul' && <img src="https://i.imgur.com/aaiIH2R.jpg" alt="Yakul" />}
                {name === 'Shishigami' && <img src="https://i.imgur.com/hxzwxoj.png" alt="Shishigami" />}
                {name === 'Moro' && <img src="https://i.imgur.com/JFyOIX4.jpg" alt="Moro" />}
                {name === 'Jiji' && <img src="https://i.imgur.com/r6ChdSc.jpg" alt="Jiji" />}
                {name === 'Satsuki Kusakabe' && <img src="https://i.imgur.com/WhqWgvh.png" alt="Satsuki Kusakabe" />}
                {name === 'Mei Kusakabe' && <img src="https://i.imgur.com/Q0jz8fY.png" alt="Mei Kusakabe" />}
                {name === 'Tatsuo Kusakabe' && <img src="https://i.imgur.com/KfBPKJS.jpg" alt="Tatsuo Kusakabe" />}
                {name === 'Yasuko Kusakabe' && <img src="https://i.imgur.com/gJjHz0o.jpg" alt="Yasuko Kusakabe" />}
                {name === 'Granny' && <img src="https://i.imgur.com/dFDtfc0.jpg" alt="Granny" />}
                {name === 'Kanta Ogaki' && <img src="https://i.imgur.com/9LSFfhF.jpg" alt="Kanta Ogaki" />}
                {name === 'Totoro' && <img src="https://i.imgur.com/ce1kft3.jpg" alt="Totoro" />}
                {name === 'Chu Totoro' && <img src="https://i.imgur.com/Ced7Pxy.jpg" alt="Chu Totoro" />}
                {name === 'Chibi Totoro' && <img src="https://i.imgur.com/6DUBtmz.jpg" alt="Chibi Totoro" />}
                {name === 'Catbus' && <img src="https://i.imgur.com/zXBfbQj.jpg" alt="Catbus" />}
                {name === 'Niya' && <img src="https://i.imgur.com/4VLipQk.jpg" alt="Niya" />}
                {name === 'Renaldo Moon aka Moon aka Muta' && <img src="https://i.imgur.com/F2daCVy.png" alt="Muta" />}
                {name === 'Cat King' && <img src="https://i.imgur.com/6XXh7WS.jpg" alt="Cat King" />}
                {name === 'Yuki' && <img src="https://i.imgur.com/YQKsPuE.png" alt="Yuki" />}
                {name === 'Haru' && <img src="https://i.imgur.com/BIAip6S.jpg" alt="Haru" />}
                {name === 'Baron Humbert von Gikkingen' && <img src="https://i.imgur.com/Xuz750T.jpg" alt="Baron Humbert von Gikkingen" />}
                {name === 'Natori' && <img src="https://i.imgur.com/rlk5J9j.jpg" alt="Natori" />}
                {name === 'Colonel Muska' && <img src="https://i.imgur.com/OMi0UpQ.jpg" alt="Colonel Muska" />}
                {name === 'Porco Rosso' && <img src="https://i.imgur.com/7I4GsRC.jpg" alt="Porco Rosso" />}
                {name === 'Sosuke' && <img src="https://i.imgur.com/3pJCOSD.jpg" alt="Sosuke" />}
              </figure>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PeopleCard