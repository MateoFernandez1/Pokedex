import './Appnav.css';
import logo from "./img/Pokeball.png";
import s1 from "./img/Arrow.svg";



function Appnav() {
 


  return (
      <nav className="Appnav">
        <div className="Logo1">
        <img className="Logo" src={logo}  alt=""/>
        </div>
        <p className="Title">
          Pokédex
        </p>
        <button className="Sort">
          <p className='button1'>#</p>
        <img className="sort1" src={s1}  alt=""/>
</button> 
      </nav>
  );
}

export default Appnav;
