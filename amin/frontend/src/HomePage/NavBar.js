import React from "react"
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
      <header className="bg-red-600">
      	<div>
      	 	<nav>
      	 		<NavLink to="/" exact>
      	 		
      	 		</NavLink>
				<NavLink to="Registracija">
				  Registracija
				</NavLink>
			    <NavLink to="Login">
			    	Login
			    </NavLink>
			    <NavLink to="PretragaApoteka">
			    	Pretraga apoteka
			    </NavLink>
			    <NavLink to="PretragaLekova">
			    	Pretraga lekova
			    </NavLink>
			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}