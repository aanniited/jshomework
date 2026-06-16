const Card = ({name, auth, image, description, imgStyle, onPress}) => {

 return <div className="card" >

    <h1 className="card-title">{name}</h1>
    <h2>{auth} </h2>
    <div className="img-box">

    <img src={image} style={imgStyle}/>
    
     </div>


    <p className="card-desc">{description}</p>
    <button className="btn" onClick={ onPress} >ღილაკი</button>
    
 </div>

}

export default Card