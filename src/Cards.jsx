

import React ,{useEffect,useState} from 'react';
import Card from './Card.jsx'
import './Cards.css'


function Cards({pokemonfilter}) {

  
const [pokemon,setPokemon]=useState({name:'',hp:'',atack:'',defence:'',spatack:'',spdefence:'',speed:'',img:'',color:'',pokemon_evolution:'',genera:''});
const [pokemonevo,setPokemonevo]=useState({evo1:'',url1:'https://pokeapi.co/api/v2/pokemon-species/1',url2:'https://pokeapi.co/api/v2/pokemon-species/1',url3:'https://pokeapi.co/api/v2/pokemon-species/1',evo2:'',evo3:''});
const [habilidad,setHabilididad]=useState('')
const [habilidad2,setHabilidad2]=useState('')
const [nonehabilidad,setNoneHabilidad]=useState(true)
const [logo,setLogo]=useState('fire')
const [logo2,setLogo2]=useState('fire')
const [nones,setNone]=useState(true)
const [cargado,setCargando]=useState(true);
  const [noneevo,setNoneEvo]=useState('none');
  function PokemonEvolution(){

      fetch(`${pokemon.pokemon_evolution}`)
      .then(r => r.json())
      .then((recurso) => {

        pokemonevo.evo1=recurso.chain.species.name;
         pokemonevo.url1=recurso.chain.species.url;
        
        pokemonevo.evo2=recurso.chain.evolves_to[0].species.name;
         pokemonevo.url2=recurso.chain.evolves_to[0].species.url;

          if(recurso.chain.evolves_to[0].evolves_to.length!=0){
             pokemonevo.evo3=recurso.chain.evolves_to[0].evolves_to[0].species.name; 

              pokemonevo.url3=recurso.chain.evolves_to[0].evolves_to[0].species.url; 
            setNoneEvo('block')
            
          }
          else{
          setNoneEvo('none')

        }
         setPokemonevo({...pokemonevo})

      });

  }
    function PokemonPropiedades(){

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonfilter}`)
      .then(r => r.json())
      .then((recurso) => {
    
       setHabilididad(recurso.abilities[0].ability.name);
        if(recurso.abilities.length==2){
          setHabilidad2(recurso.abilities[1].ability.name);
          setNoneHabilidad(false);
        }
        setLogo(recurso.types[0].type.name);
        
        

        if(recurso.types.length==2){
          setLogo2(recurso.types[1].type.name);    
          setNone(false);
        }else{
          setNone(true);

        }



        pokemon.hp=recurso.stats[0].base_stat
        pokemon.atack=recurso.stats[1].base_stat
        pokemon.defence=recurso.stats[2].base_stat
        pokemon.spatack=recurso.stats[3].base_stat
        pokemon.spdefence=recurso.stats[4].base_stat
        pokemon.speed=recurso.stats[5].base_stat
        pokemon.img=recurso.sprites.other.dream_world.front_default;
        pokemon.height=recurso.height;
        pokemon.weight=recurso.weight;
         setPokemon({...pokemon});

      });

  }


 
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonfilter}`)
      .then(r => r.json())
      .then((recurso) => {


            
        if(pokemonfilter.length!==0){
        
        pokemon.pokemon_evolution=recurso.evolution_chain.url; 
        pokemon.name=recurso.names[6].name

        pokemon.color=recurso.color.name
        pokemon.genera=recurso.genera[7].genus
       
        PokemonEvolution();
        PokemonPropiedades();
        setCargando(false);
         setPokemon({...pokemon});
         }
        
        

      });
      },[pokemonfilter]);
   if (cargado) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
   }

  
  
 

  return (
    <div className="Cardss">
        <Card noneevo={noneevo} pokemonfilter={pokemonfilter} habilidad={habilidad} habilidad2={habilidad2} noneHabilidad={nonehabilidad} logo={logo} logo2={logo2} nones={nones} pokemonevo={pokemonevo} pokemon={pokemon} setPokemonevo={setPokemonevo} setPokemon={setPokemon}/>
    </div>
  );
}

export default Cards;