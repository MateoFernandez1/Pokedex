import { useState } from "react";
import './Appimput.css';
import {Link, useNavigate} from "react-router-dom"
import DATA from "./DATA"; 
import logo from "./img/Pokeball.png";
import s1 from "./img/Arrow.svg";

function Appimput() {
  const [buttonText, setButtonText] = useState ("#");
  function changeClick() {if (buttonText === "#") {setButtonText('A Z');} else{ setButtonText("#")}}  
  const[pokemon, setPokemon] = useState ("")
  const navigate = useNavigate();

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
          <a onClick={() =>  { navigate(`pokemon/${val.name}`, { state: {name: `${val.name}`,number:`${val.number}`,img: `${val.img}`,type:`${val.type}`, type2:`${val.type2}`,
          weigth:`${val.weigth}`,height:`${val.height}`,ability:`${val.ability}`, info:`${val.info}` ,hp:`${val.hp}` ,atk:`${val.atk}` ,def:`${val.def}` 
          ,satk:`${val.satk}` ,sdef:`${val.sdef}` ,spd:`${val.spd}`, color:`${val.color}` } }) }  } id= {val.type}>{val.name}</a>
               
          </div>
        })}
        
      </div>
      </body>
)
  }

export default Appimput;