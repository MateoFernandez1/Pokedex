import React from 'react';
import DATA from "../components/DATA.json";


export default function Card() {
    return (
         <div className="Pokemoncard">
             asd
          <img src={DATA.img} alt={DATA.name}/>
          <p> {DATA.name}</p>
          {DATA.number}
          </div>)
}


