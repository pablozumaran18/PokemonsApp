import { Link, Outlet } from "react-router-dom"
import './menuSuperior.css';
const MenuSuperior = (props)=>{
    
   return(
      
      <>
      
      <Link to ="/pokemon"> pokemon</Link>
      <Link to ="/historial"> historial</Link>
      <Link to ="/combate"> combate</Link>
      <Link to ="/lista"> lista</Link>
      <br/>
      <input type="text" className = "buscador"/>
      <button> BUSCAR </button>
      <br/>
      <Outlet/>
      </>
   )
        


}

export default MenuSuperior