 import CardEvo from './CardEvo.jsx'
import './Card.css'

function Card({pokemonfilter,noneevo,habilidad,logo,logo2,habilidad2,filtro,pokemon,setPokemon,pokemonevo,setPokemonevo,nones}) {
  return (
    <div className="Card">
        <div className="CardContainerTitulo">
          <div className="CardTitulo">
            <h1>{pokemon.name}</h1>
            <button style={{ backgroundColor:pokemon.color,color:"white"}}>{pokemon.genera}</button>
          </div>
        </div>
        <div className="CardContainers">
        <div className="CardContainerInfo">
          
          <div><h2>ID </h2><p>#{pokemonfilter}</p></div>
          <div><h2>Heigth </h2><p>{pokemon.height}m</p></div>
          <div><h2>Weigth </h2><p>{pokemon.weight}Kg</p></div>
          <div><h2>Abilities </h2><button style={{ backgroundColor:pokemon.color}}>{habilidad}</button><button  style={{ backgroundColor:pokemon.color}}>{habilidad2}</button></div>
          <div><h2>Type </h2><button style={{ backgroundColor:pokemon.color}}>{logo}<img src={require(`./${logo}.png`)} alt=""/></button><button style={{ display: nones ? 'none' : 'block' ,backgroundColor:pokemon.color}}>{logo2}<img src={require(`./${logo2}.png`)} alt=""/></button></div>
          <div><h2>Forms </h2><button style={{ backgroundColor:pokemon.color}} >{pokemon.name}</button></div>


        </div>
        <div className="CardContainerImg">
          <img src={pokemon.img} alt=""/>
        </div>
        <div className="CardContainerSkills">
            <div className="CardContainerSkillsStrong">
                <button>Base</button>
                <button>Min</button>
                <button>Max</button>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>HP</p>
              </div>
              <div className="HPPorcentaje">
                <div  style={{width:pokemon.hp+"%",backgroundColor:pokemon.color}} className="HPPorcentajeNumber">
                  <p>{pokemon.hp}</p>
                </div>

              </div>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>Atacck</p>
              </div>
              <div className="AtacckPorcentaje">
                <div  style={{width:pokemon.atack+"%",backgroundColor:pokemon.color}} className="AtacckPorcentajeNumber">
                  <p>{pokemon.atack}</p>
                </div>

              </div>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>Defence</p>
              </div>
              <div className="DefencePorcentaje">
                <div  style={{width:pokemon.defence+"%",backgroundColor:pokemon.color}} className="DefencePorcentajeNumber">
                  <p>{pokemon.defence}</p>
                </div>

              </div>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>Sp Atack</p>
              </div>
              <div className="SpAtackPorcentaje">
                <div  style={{width:pokemon.spatack+"%",backgroundColor:pokemon.color}} className="SpAtackPorcentajeNumber">
                  <p>{pokemon.spatack}</p>
                </div>

              </div>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>Sp Defence</p>
              </div>
              <div className="SpDefencePorcentaje">
                <div  style={{width:pokemon.spdefence+"%",backgroundColor:pokemon.color}} className="SpDefencePorcentajeNumber">
                  <p>{pokemon.spdefence}</p>
                </div>

              </div>
            </div>
            <div className="Strong">
              <div className="HPp">
                <p>Speed</p>
              </div>
              <div className="SpeedPorcentaje">
                <div  style={{width:pokemon.speed+"%",backgroundColor:pokemon.color}} className="SpeedPorcentajeNumber">
                  <p>{pokemon.speed}</p>
                </div>

              </div>
            </div>

        </div>
        </div>


        <div className="CardEvos">
              <CardEvo noneevo={noneevo} pokemonevo={pokemonevo}/>

        </div>
      
    </div>
  );
}

export default Card;