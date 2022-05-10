import React from 'react';
import './Card.css';
import Arrowleft from "../components/img/arrow-left.svg";
import {Link} from "react-router-dom"





export default function Card() {
    return (
         <div className="Pokemoncard">
             <nav className="Cardnav">
             <Link to= "/" >home</Link> 
             <p>nombre</p>  
             <p>numero</p>       
             </nav>
          </div>)
}


