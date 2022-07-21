import React, { useEffect, useState } from "react"


const Pokemon =(props)=>{

    const [buscarPokemon, setbuscarPokemon] = useState([])
    const [pokemon, setPokemons] = useState([])

    useEffect (() => {
        fetch ("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    setPokemons(data)
                    setPokemons(data.results)
                }
            )
             

        }   ,[])
        
    return(
        <> 
        <input type="text" className = "buscador"/>
        <button> BUSCAR </button>
        <br/>
        <div>nombre {pokemon.name} </div>
        <br/>
        <div>peso</div>
        <br/>
        <div>habilidades</div>
        <br/>
        <div></div>
        
        </>
    )
}

export default Pokemon