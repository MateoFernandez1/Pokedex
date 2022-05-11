import { React, useState } from 'react'
import DATA from "./DATA"
import {Link} from "react-router-dom"

function List(props) {

        const filteredData = DATA.filter((el) => {
      
            if (props.input === '') {
                return el;
            }
            else {
                return el.name.toLowerCase().includes(props.input)
            }
        })
    return (
        <div>
            {filteredData.map((val) => (
                
                <div className={val.type} >
                <p className="number1">{val.number} </p>
                <img src={val.img} alt={val.name} className="images1"/>
        <Link to= {{pathname: `pokemon/${val.name}`, state: {val: val.name} }}                   
        id= {val.type}>{val.name}</Link>   
                
                
                </div>
                
            
                    

                    

            
            
        ))}
        </div>
    )
}


export default List

const [pokemon, setPokemon] = useState("");
let inputHandler = (e) => {
  var lowerCase = e.target.value.toLowerCase();
  setPokemon(lowerCase);};

  
  <List input={pokemon}/>