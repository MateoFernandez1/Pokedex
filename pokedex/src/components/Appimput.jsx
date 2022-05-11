import { useState } from "react";
import './Appimput.css';
import {Link} from "react-router-dom"
import DATA from "./DATA"; 
import logo from "./img/Pokeball.png";
import s1 from "./img/Arrow.svg";

function Appimput() {
  const [buttonText, setButtonText] = useState ("#");
  function changeClick() {if (buttonText === "#") {setButtonText('A Z');} else{ setButtonText("#")}}  
  const[pokemon, setPokemon] = useState ("")

  function onclickSort(){
    const sortedData = [...pokemon].sort((a,b)=>{
      return a.name > b.name ? 1 : -1
    })
    setPokemon(sortedData)}
  
  return (
      <body className="Body">
        <nav className="Appnav">
        <div className="Logo1">
        <img className="Logo" src={logo}  alt=""/>
        </div>
        <p className="Title">
          Pokédex
        </p>
        <button className="Sort" onClick={() => {changeClick(); //onclickSort();
         }}>
          <p className='button1'>{buttonText}</p>
        <img className="sort1" src={s1}  alt="Ordenar"/></button> 
      </nav>
      <div className="Pokemonlist">
      <input type="text" placeholder="Buscar" onChange={event => {setPokemon(event.target.value)}} className="Input"/>
      {DATA.filter((val)=> (val.name.toLowerCase().includes(pokemon.toLowerCase()))).map((val) => {
        return <div className={val.type}>
          <p className="number1"  >{val.number}</p>
          <img src={val.img} alt={val.name} className="images1"/>
          <Link to= {`pokemon/${val.name}`} id= {val.type}>{val.name}</Link>        
          </div>
        })}
        
      </div>
      </body>
)
  }

export default Appimput;