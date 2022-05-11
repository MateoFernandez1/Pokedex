
import React from 'react';
import './Card.css';
import Arrowleft from "../components/img/arrow-left.svg";
import {Link, useLocation} from "react-router-dom"
import  Bulbasaur from "../components/img/bulbasaur.png";


export default function Card() {
    const location = useLocation();
    return (
         <div className="Pokemoncard">
             <nav className="Cardnav">
             <Link to= "/" > <svg className='Home' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" ><path fill="#FFFFFF" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z"/>
              </svg></Link>   
             <p className='Name'>{location.state.name}</p>  
             <p className='Number'>{location.state.number}</p>       
             </nav>
             <img src={location.state.img} className='Image'/>
             <div className='Stats'>
                 <ul className='Tipos'>
                     <li className='T1'>{location.state.type}</li>
                     <li className='T2'>{location.state.type2}</li>
                 </ul>
                 <p className='About'>About</p>
                 <div className='Table1'>
                 <p className='Ab11' id='peso'>{location.state.weigth}</p>
                 <p className='Ab11' id='altura'>{location.state.height}</p>
                 <p className='Ab12'>{location.state.ability}</p>
                 <p className='Ab13'>Weigth</p>
                 <p className='Ab13'>Height</p>
                 <p className='Ab13' id='Ab14'>Abilities</p>

                </div>
                
                 <p className='Description'>{location.state.info}</p>
                 <p className='BaseStats'>Base Stats</p>
                 <div className='Table2'>
                     <p className='BS1'>HP</p> <p className='BS2'>{location.state.hp}</p> <progress value={location.state.hp} max="252" className='Bar'></progress>
                     <p className='BS1'>ATK</p> <p className='BS2'>{location.state.atk}</p> <progress value={location.state.atk} max="252" className='Bar'></progress>
                     <p className='BS1'>DEF</p> <p className='BS2'>{location.state.def}</p> <progress value={location.state.def} max="252" className='Bar'></progress>
                     <p className='BS1'>SATK</p> <p className='BS2'>{location.state.satk}</p> <progress value={location.state.satk} max="252" className='Bar'></progress>
                     <p className='BS1'>SDEF</p> <p className='BS2'>{location.state.sdef}</p> <progress value={location.state.sdef} max="252" className='Bar'></progress>
                     <p className='BS1'>SPD</p> <p className='BS2'>{location.state.spd}</p> <progress value={location.state.spd} max="252" className='Bar'></progress>

                    
                 </div>

             </div>


          </div>)
}

                

