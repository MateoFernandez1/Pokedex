const Pokemon = (props) =>{
    return <div className="Pokemon">{props.Img} 
    <a href="pages/Page1">{props.name}</a>
    {props.Id}</div>
}

export default Pokemon