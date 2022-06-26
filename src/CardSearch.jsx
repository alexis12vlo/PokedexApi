
import React, { useState } from 'react';
import './CardSearch.css'



function CardSearch({ PokemonClick, color, name, id }) {

  if (color == 'white') {
    color = 'black';

  }
  if (color == 'yellow') {
    color = '#A9BC26';

  }
  const [img, setImg] = useState('')
  const [logo, setLogo] = useState('fire')
  const [logo2, setLogo2] = useState('fire')
  const [nones, setNone] = useState(true)
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json())
    .then((recurso) => {
      if (recurso.sprites)
        setImg(recurso.sprites.other.dream_world.front_default);
      setLogo(recurso.types[0].type.name);
      if (recurso.types.length == 2) {
        setLogo2(recurso.types[1].type.name);

        setNone(false);
      } else {
        setNone(true);
      }


    });




  return (
    <div onClick={(e) => { PokemonClick(id, color) }} className="Cards">
      <div className="NombreCardSearch">
        <div className="CardsSearchId">
          <h1>{id}</h1>
        </div>

        <div className="LogosCardSearch">
          <div style={{ backgroundColor: color }} className="Logosdiv">
            <img src={require(`./${logo}.png`)} />
          </div>
          <div style={{ display: nones ? 'none' : 'block', backgroundColor: color }} className="Logosdiv">
            <img src={require(`./${logo2}.png`)} />
          </div>

        </div>
      </div>

      <div className="ImageCardSearch">
        <img src={img} />
      </div>
      <div>
        <p>{name}</p>
      </div>

    </div>
  );
}

export default CardSearch;