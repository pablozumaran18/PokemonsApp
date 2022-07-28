import React, { useEffect, useState } from "react"
import "./pokemones.css"


const Pokemon =(props)=>{

    const [pokemon, setPokemons] = useState([])
    const [laBusqueda,setlaBusqueda] = useState([])
    const [Texto, setTexto] = useState([])
    const [image, setImage] = useState("")
    const [imageShiny, setImageShiny] = useState("")
    const[imageTrasera,setImagenTrasera] = useState("")
    const[imageTraseraShiny,setImagenTraseraShiny] = useState("")
    const[Ubicacion,setUbicacion] = useState("")

    useEffect (() => {
        fetch ("https://pokeapi.co/api/v2/pokemon/"+ laBusqueda)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    console.log(data.abilities)
                    console.log(data.moves)
                    console.log(data.stats)
                    setPokemons(data)

                    setImageShiny(data.sprites.front_shiny)
                    setImage(data.sprites.front_default)
                    setImagenTrasera(data.sprites.back_default)
                    setImagenTraseraShiny(data.sprites.back_shiny)
                }
                )
             fetch ("https://pokeapi.co/api/v2/pokemon/25/encounters")
                .then(res => res.json())
                .then(
                    (data2 => {
                        console.log(data2)
                        setUbicacion(data2.location_area)

                    })
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
        <input type={props.type} onChange={ (e) => {handleChange(e) }} className = "buscador" id="inpute"/>
        <button onClick= "buscar" onClick ={clickUsuario} id="butun"> BUSCAR  </button>
        <br/>
        <img src={image} id ="img" />
        <img src={imageTrasera} id ="img"/>
        <img src={imageShiny} id ="img" />
        <img src={imageTraseraShiny} id ="img"/>

        <br/>
        <div id="titulos">NOMBRE </div>
        <div id="div">{pokemon.name} </div>
        <br/>
        <div id="titulos">PESO </div>
        <div id="div">{pokemon.weight}</div>
        <br/>

        <div id="titulos">ESTADISTICAS</div>
        {pokemon.stats?.map((estadistica, idx) => {
            return(<div id="div" key={idx}>{estadistica.stat.name}: {estadistica.base_stat}</div>)
        })}

        <br/>
        <div id="titulos">HABILIDADES</div>
        <br/>  

        {pokemon.abilities?.map((habilidad, idx) => {
            return(<div id="div" key={idx}>{habilidad.ability.name}</div>)
        })}

        <br/>

        <div id="titulos">EXPERIENCIA BASE </div>
        <div id="div"> {pokemon.base_experience}
        </div>
        <br/>

        {pokemon.location_area?.map((ubi, idx) => {
            return(<div id="div" key={idx}>{ubi.name}</div>)
        })}       


        <div id="titulos">MOVIMIENTOS </div>
        {pokemon.moves?.map((movimientos, idx) => {
            return(<div id="div2" key={idx}> movimiento {movimientos.move.name}</div>)
        })}
        </>
    )
}

export default Pokemon

