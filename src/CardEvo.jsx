
import CardSearch from  './CardSearch.jsx'
import React ,{useEffect,useState} from 'react';
import './CardEvo.css'
import { GiThornedArrow } from "react-icons/gi";

function CardEvo({noneevo,pokemonevo}){
  const [pokemonevo1,setPokemonevo1]=useState({name:'',logo1:'fire',logo2:'fire',imgurl:'https://pokeapi.co/api/v2/pokemon/1',img:'',color:''});
  const [pokemonevo2,setPokemonevo2]=useState({name:'',logo1:'fire',logo2:'fire',imgurl:'https://pokeapi.co/api/v2/pokemon/1',img:'',color:''});
  const [pokemonevo3,setPokemonevo3]=useState({name:'',logo1:'fire',logo2:'fire',imgurl:'https://pokeapi.co/api/v2/pokemon/1',img:'',color:''});

  const [nones,setNones]=useState('none');
  const [noness,setNoness]=useState('none');
  const [nonesss,setNonesss]=useState('none');

        function PokemonEvoImg(){

      fetch(`${pokemonevo1.imgurl}`)
      .then(r => r.json())
      .then((recurso) => {

     
            pokemonevo1.img=recurso.sprites.other.dream_world.front_default;
             
            pokemonevo1.logo1=recurso.types[0].type.name;
    
            if(recurso.types.length==2){
            pokemonevo1.logo2=recurso.types[1].type.name;
            setNones('block')
            }else{
          setNones('none')

        }

         setPokemonevo1({...pokemonevo1});

      });



      fetch(`${pokemonevo2.imgurl}`)
      .then(r => r.json())
      .then((recurso) => {
     
            


            pokemonevo2.img=recurso.sprites.other.dream_world.front_default;
           
            pokemonevo2.logo1=recurso.types[0].type.name;

            if(recurso.types.length==2){
            pokemonevo2.logo2=recurso.types[1].type.name;
            setNoness('block')
            }else{
          setNoness('none')

        }
           
         setPokemonevo2({...pokemonevo2});

      });
      fetch(`${pokemonevo3.imgurl}`)
      .then(r => r.json())
      .then((recurso) => {
     
           

            pokemonevo3.img=recurso.sprites.other.dream_world.front_default;
            pokemonevo3.logo1=recurso.types[0].type.name;
     

            if(recurso.types.length==2){
            pokemonevo3.logo2=recurso.types[1].type.name;
            setNonesss('block')
            }else{
          setNonesss('none')

        }

         setPokemonevo3({...pokemonevo3});

            });

      }



function PokemonEvo(){

       fetch(`${pokemonevo.url1}`)
      .then(r => r.json())
      .then((recurso) => {


            
        pokemonevo1.imgurl=recurso.varieties[0].pokemon.url
        pokemonevo1.name=recurso.names[6].name
        pokemonevo1.color=recurso.color.name
         
        PokemonEvoImg()

        setPokemonevo1({...pokemonevo1});
      });


      fetch(`${pokemonevo.url2}`)
      .then(r => r.json())
      .then((recurso) => {


        pokemonevo2.imgurl=recurso.varieties[0].pokemon.url    
        pokemonevo2.name=recurso.names[6].name

        pokemonevo2.color=recurso.color.name
        PokemonEvoImg()
         setPokemonevo2({...pokemonevo2});
      });
        
  if(pokemonevo.url3!=''){

      fetch(`${pokemonevo.url3}`)
      .then(r => r.json())
      .then((recurso) => {

        pokemonevo3.imgurl=recurso.varieties[0].pokemon.url
      
        pokemonevo3.name=recurso.names[6].name

        pokemonevo3.color=recurso.color.name
        PokemonEvoImg()
        setPokemonevo3({...pokemonevo3});
      });

  }


}
PokemonEvo();

  return (
    <div className="CardEvoContainer">

          <div className="CardEvoContainerTitulo">
              <h1>Evolution Chain</h1>

          </div>

          <div className="Appa">
          <div className="CardEvoContainer1">
            <div className="CardEvoContainer1img">
              <img src={pokemonevo1.img} alt=""/>
            </div>
            <div className="CardEvoContainer1Nombre">
              <button  style={{ backgroundColor:pokemonevo1.color}} className="BotonEvo">{pokemonevo1.name}</button>
            </div>
            <div className="LogosEvo">
            <div style={{ backgroundColor:pokemonevo1.color}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo1.logo1}.png`)} />
            </div>
     
            <div style={{ backgroundColor:pokemonevo1.color,display:nones}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo1.logo2}.png`)} />
            </div>

           
            </div>

          </div>

          <div className="Flecha">
              <GiThornedArrow className="Flechaza"/>
          </div>


          <div className="CardEvoContainer1">
            <div className="CardEvoContainer1img">
              <img src={pokemonevo2.img} alt=""/>
            </div>
            <div className="CardEvoContainer1Nombre">
              <button  style={{ backgroundColor:pokemonevo2.color}} className="BotonEvo">{pokemonevo2.name}</button>
            </div>

            <div className="LogosEvo">
            <div style={{ backgroundColor:pokemonevo2.color}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo2.logo1}.png`)} />
            </div>

            <div style={{ backgroundColor:pokemonevo1.color,display:noness}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo2.logo2}.png`)} />
            </div>
            </div>

          </div>

          <div style={{display:noneevo}} className="Flecha">
              <GiThornedArrow className="Flechaza"/>
          </div>

          <div style={{display:noneevo}} className="CardEvoContainer1">
            <div className="CardEvoContainer1img">
              <img src={pokemonevo3.img} alt=""/>
            </div>
          <div className="CardEvoContainer1Nombre">
              <button  style={{ backgroundColor:pokemonevo3.color}} className="BotonEvo">{pokemonevo3.name}</button>
            </div>

            <div className="LogosEvo">
            <div style={{ backgroundColor:pokemonevo3.color}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo3.logo1}.png`)} />
            </div>

            <div style={{ backgroundColor:pokemonevo1.color,display:nonesss}} className="Logosdivevo">
                  <img src={require(`./${pokemonevo3.logo2}.png`)} />
            </div>
            </div>
           
            </div>

          </div>

    </div>
  );
}

export default CardEvo;