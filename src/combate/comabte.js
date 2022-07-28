// // // import { Button,themeProvider } from "@mui/material"
// // import React,{useEffect,useState} from "react"
// // // import theme from "../theme"

// const Combate =(props)=>{

//     //     const [poke1,setPoke1] = useState({})
//     //     const [poke2,setPoke2] = useState({})
    
//     //     const [hp1,setHp1] = useState(999999)
//     //     const [hp2,setHp2] = useState(999999)
    
//     //     const[disabled,setDisabled]=useState({})
    
    
//     //     useEffect(() => {
//     //         	fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     //         	.then(result => result.json())
//     //         	.then((data) => {
//     //             		setPoke2 (data)
//     //             		data.stats.map(stat) => {
//     //                 		if (stat.stat.name == "hp")(
//     //                     			setHp2(stat.base_stat)
                        
//     //                 )
//     //             }
//     //         })
//     //     })
//                fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     //         	.then(result => result.json())
//     //         	.then((data) => {
//     //             		setPoke1 (data)
//     //             		data.stats.map(stat) => {
//     //                 		if (stat.stat.name == "hp")(
//     //                     			setHp1(stat.base_stat)
//             }
//         })
    
//             console.log(data)
//             console.log(data.stats)
//         })
    
//     },[])
    
//     const handleAttackpoke1 = (damage) => {
//         console.log(damage)
//         setHp2(hp2- damage)
//     }
    
//     const handleAttackpoke2 = (damage) => {
//         console.log(damage)
    
    
//     return (
//         <>
//             poke1 : vida: {hp1}
//             <img src = {poke1.sprites.front_default} />
//             {poke1.stats?.map((stat) => {
//                 if (stat.stat.name === "atack" || stat.name === "special-atack"
//                 }
//             })}
//         </>
    
    
    
    return(
        <> 
        {/* <Historial busquedaH = "hola"/> */}
            combate
        </>
    )
// }

export default Combate