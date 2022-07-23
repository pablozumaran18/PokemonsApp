import React, { useEffect, useState } from "react"
import "./pokemones.css"


const Pokemon =(props)=>{

    const [buscarPokemon, setbuscarPokemon] = useState([])
    const [pokemon, setPokemons] = useState([])
    const [laBusqueda,setlaBusqueda] = useState([])
    const [Texto, setTexto] = useState([])
    const [image, setImage] = useState("")
    const [imageShiny, setImageShiny] = useState("")
    const[imageTrasera,setImagenTrasera] = useState("")
    const[imageTraseraShiny,setImagenTraseraShiny] = useState("")

    useEffect (() => {
        fetch ("https://pokeapi.co/api/v2/pokemon/"+ laBusqueda)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    console.log(data.abilities)
                    console.log(data.moves)
                    setPokemons(data)

                    setImageShiny(data.sprites.front_shiny)
                    setImage(data.sprites.front_default)
                    setImagenTrasera(data.sprites.back_default)
                    setImagenTraseraShiny(data.sprites.back_shiny)

                }
            )
             

        }   ,[Texto])
     
            
        const handleChange = (e) => {
            setlaBusqueda(e.target.value)
        }

        const clickUsuario = (evento) => {
            setTexto(laBusqueda)
        }

    return(
        <> 
        <input type={props.type} onChange={ (e) => {handleChange(e) }} className = "buscador"/>
        <button onClick= "buscar" onClick ={clickUsuario}> BUSCAR </button>
        <br/>
        <img src={image} />
        <img src={imageTrasera}/>
        <img src={imageShiny} />
        <img src={imageTraseraShiny}/>

        <br/>
        <div id="titulos">NOMBRE </div>
        <div>{pokemon.name} </div>
        <br/>
        <div id="titulos">PESO </div>
        <div>{pokemon.weight}</div>
        <br/>



        <br/>
        <div id="titulos">HABILIDADES</div>
        <br/>  

        {pokemon.abilities?.map((habilidad, idx) => {
            return(<div id="div" key={idx}>{habilidad.ability.name}</div>)
        })}

        <br/>

        <div id="titulos">EXPERIENCIA BASE </div>
        <div> {pokemon.base_experience}
        </div>
        <br/>

        <div id="titulos">MOVIMIENTOS </div>
        {pokemon.moves?.map((movimientos, idx) => {
            return(<div id="div2" key={idx}> movimiento {movimientos.move.name}</div>)
        })}
        </>
    )
}

export default Pokemon
