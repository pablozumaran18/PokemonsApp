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

      <br/>
      <Outlet/>
      </>
   )
        


}

export default MenuSuperior