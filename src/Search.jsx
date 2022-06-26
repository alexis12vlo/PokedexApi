import CardSearch from './CardSearch.jsx';
import React, { useEffect, useState } from 'react';
import './Search.css'
import Cards from './Cards.jsx';
import './Card.css';
import './Cards.css';
import { TiArrowLeftOutline } from "react-icons/ti";

function Search() {

  const [cargado, setCargando] = useState(true);
  const [pokemonS, setPokemonS] = useState([]);
  const [ca, setCa] = useState(1);
  const [filtro, setFiltro] = useState('');
  const [pokemonfilter, setPokemonFilter] = useState('');
  const [noneSearch, setNoneSearch] = useState('none')
  const [noneCards, setNoneCards] = useState('flex')
  const [noneCardso, setNoneCardso] = useState('1')
  const [color, setColor] = useState('#EFEFEF')
  function PokemonClick(id, color) {
    setPokemonFilter(id);

    setTimeout(() => {
      setNoneSearch('flex')

      setNoneCards('none')
      setNoneCardso('0')
      window.scrollTo(0, 0)
      setColor('#EFEFEF');

    }, 1000)





    setTimeout(() => {

      setNoneCards('none')
      setNoneCardso('0')
      window.scrollTo(0, 0)
      setColor('#EFEFEF');

    }, 1000)

    setTimeout(() => {
      setNoneCardso('1')
      setColor(color);
    }, 1000)

  }
  function Volver() {
    setNoneCardso('0')
    setNoneSearch('none')
    setNoneCards('flex')
    setColor('#EFEFEF');
    console.log('Volver');
    setPokemonFilter('');


  }




  if (ca < 50) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${ca}`)
      .then(r => r.json())
      .then((recurso) => {

        const pok = {
          name: recurso.names[6].name,
          id: ca,
          color: recurso.color.name


        };
        // console.log(recurso);
        setPokemonS([...pokemonS, pok])
        setCargando(false);

        setCa(ca + 1);

      });
    console.log(ca);
  }











  var id = 1;
  return (
    <div className="Search">
      <div className="Nav">
        <div style={{ transitionDuration: "3s", backgroundColor: color }} className="Nav_Container">
          <div className="Cardas">
            <div style={{ display: noneCards }} className="Search_Input">
              <input placeholder="Search..." onChange={(e) => {
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${ca}`)
                  .then(r => r.json())
                  .then((recurso) => {

                    const pok = {
                      name: recurso.names[6].name,
                      id: ca,
                      color: recurso.color.name


                    };
                    // console.log(recurso);
                    setPokemonS([...pokemonS, pok])
                    setCargando(false);

                    setCa(ca + 1);

                  }); setFiltro(e.target.value)
              }} type="text" />
            </div>
            <div onClick={Volver} style={{ display: noneSearch }} className="Search_Flecha">
              <TiArrowLeftOutline />
            </div>
            <div className="Logo_Nav">
              <a href="">Pokédex</a>
            </div>
          </div>

        </div>

        <div style={{ display: noneCards }} className="CardsSearch">{
          pokemonS.filter((elemento) => {

            if (filtro == "") {
              return elemento;
            } else {

              if (elemento.id.toString().includes(filtro) || elemento.name.toString().toLowerCase().includes(filtro.toLowerCase())) {

                return elemento;
              }
            }
          }).map((elemento, id) => (
            <CardSearch PokemonClick={PokemonClick} key={id} color={elemento.color} name={elemento.name} id={elemento.id} />
          )
          )
        }
        </div>
        <div style={{ transitionDuration: "2.5s", width: "110%", opacity: noneCardso, display: noneSearch }} className="CardsSeccion">

          <Cards pokemonfilter={pokemonfilter} filtro={filtro} />

        </div>
      </div>

    </div>
  );
}


export default Search;