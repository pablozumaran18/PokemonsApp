import React, {useEffect, useState} from "react"
import "./lista.css";
const Lista = (props) => {

        const [pokemons, setPokemons] = useState([])
        const [titulo, setTitulo] = useState([])
        
        useEffect(()=> {
            
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


    // const handleClick = () => {
    //     setTitulo("ahora soy un titulo")
    // }
    return(
        <> 
    
            {/* {titulo} */}


            <div id="titulodiv">NOMBRE DE POKEMON</div>
            {pokemons.map((pokemon) => {
                return(<div id="table">{pokemon.name}</div>)
            })}
        </>
    )
}

export default Lista