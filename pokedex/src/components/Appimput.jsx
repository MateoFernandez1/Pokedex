import { useState } from "react";
import DATA from "./DATA.json"; 
import './Appimput.css';
import {Link} from "react-router-dom"


function Appimput() {
  
  const[search, setSearch] = useState ("")
    return (
      <div>
      <input type="text" placeholder="Buscar" onChange={event => {setSearch(event.target.value)}}/>
      {DATA.filter((val)=> {
        if (search==""){
          return val
        } else if (val.name.toLowerCase().includes(search.toLowerCase())){ return val
        }
      }).map((val) => {
        return  <div className="Pokemon">
          <img src={val.img} alt={val.name}/>
          <Link to= {`pokemon/${val.name}`}>{val.name}</Link>
          {val.number}
          </div>
      }
      )}

    </div>)
  }

  



export default Appimput;