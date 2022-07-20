import { Link, Outlet } from "react-router-dom"

const MenuSuperior = (props)=>{
    
   return(

      <>
      <Link to ="/pokemon"> pokemon</Link>
      <Link to ="/historial"> historial</Link>
      <Link to ="/combate"> combate</Link>
      <Link to ="/lista"> lista</Link>
      <br/>
      <Outlet/>
      </>
   )
        


}

export default MenuSuperior