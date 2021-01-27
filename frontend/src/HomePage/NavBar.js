import React from "react"
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
      <header className="bg-gray-300">
      	<div className="container mx-auto flex justify-between">
      	 	<nav className="flex">
      	 		<NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 hover:text-green-800 text-4xl font-bold cursive tracking-windest">
      	 		
      	 		</NavLink>
				<NavLink to="Registracija" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-600 hover:text-green-800">
				  Registracija
				</NavLink>
			    <NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-600 hover:text-green-800">
			    	Login
			    </NavLink>
			    <NavLink to="PretragaApoteka" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-600 hover:text-green-800">
			    	Pretraga apoteka
			    </NavLink>
			    <NavLink to="PretragaLekova" activeClassName="text-red-100 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-600 hover:text-green-800">
			    	Pretraga lekova
			    </NavLink>
			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}