import { Link, Outlet } from "react-router-dom"
import "./menuSuperior.css";
const MenuSuperior = (props)=>{
    
   return(
      
      <>
      
      <Link to ="/pokemon" id="link"> POKEMON </Link>
      <Link to ="/historial"id="link"> HISTORIAL </Link>
      <Link to ="/combate"id="link"> COMBATE </Link>
      <Link to ="/lista"id="link"> LISTA</Link>
      <br/>

      <br/>
      <Outlet/>
      </>
   )
        


}

export default MenuSuperior