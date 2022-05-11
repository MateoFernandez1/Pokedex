
import React from 'react';
import './Card.css';
import Arrowleft from "../components/img/arrow-left.svg";
import {Link} from "react-router-dom"
import  Bulbasaur from "../components/img/bulbasaur.png";


export default function Card() {
    return (
         <div className="Pokemoncard">
             <nav className="Cardnav">
             <Link to= "/" > <img src={Arrowleft} alt="Home" className='Home' /></Link>   
             <p className='Name'>Nombre</p>  
             <p className='Number'>#000</p>       
             </nav>
             <img src={Bulbasaur} className='Image'/>
             <div className='Stats'>
                 <ul className='Tipos'>
                     <li className='T1'>Tipo1</li>
                     <li className='T2'>Tipo2</li>
                 </ul>
                 <p className='About'>About</p>
                 <div className='Table1'>
                 <p className='Ab11' id='peso'>6,9 kg</p>
                 <p className='Ab11' id='altura'>0,7 m</p>
                 <p className='Ab12'>Chlorophyll Overgrow</p>
                 <p className='Ab13'>Weigth</p>
                 <p className='Ab13'>Height</p>
                 <p className='Ab13'>Abilities</p>

                </div>
                
                 <p className='Description'>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                 <p className='BaseStats'>Base Stats</p>
                 <table className='Table2'></table>

             </div>


          </div>)
}

                

