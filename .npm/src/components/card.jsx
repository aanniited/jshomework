const Card = (props) => {

 return <div className="card" >

    <h1 className="card-title">{props.name}</h1>
    <h2>{props.auth} </h2>
    <div className="img-box">

    <img src={props.image} style={props.imgStyle}/>
    
     </div>


    <p className="card-desc">{props.description}</p>
    <button className="btn" onClick={props.onPress} >ღილაკი</button>
    
 </div>

}

export default Card