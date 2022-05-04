import './Appbody.css';
import Pokemon from './pokemon';

const ArrayPokemones = [
  {"name": "Bulbasaur",
  "Id":"#001" 
},
  {name: "Charmander",
  "Id":"#004" },
  {name: "Squirtle",
  "Id":"#007"},
  {name: "Butterfree",
  "Id":"#012"},
  {name: "Pikachu",
  "Id":"#025"},
  {name: "Gastly",
  "Id":"#092"},
  {name: "Ditto",
  "Id":"#132"},
  {name: "Mew",
  "Id":"#152"},
  {name: "Aron",
  "Id":"#304"},
]

const Appbody = () => {
  return(
   <div>
      <ul id='Pokemonlist'>
      {ArrayPokemones.map((pokemon)=>{
        return <Pokemon Id={pokemon.Id} Img={pokemon.Img} name={pokemon.name} />
      }
      )}

    </ul>
 
   </div>
  );
};

export default Appbody;