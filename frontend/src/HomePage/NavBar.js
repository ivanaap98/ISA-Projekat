import React from "react";
import {NavLink} from "react-router-dom";
import "./landingPage.css";

export default function NavBar() {
    return (
      <header className="w-full bg-gradient-to-r from-blue-100 via-blue-900 to-indigo-900">
      	<div className="container mx-auto flex justify-between text-2xl">
      	 	<nav className="w-full">
      	 		<NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-black-600 text-4xl font-bold cursive tracking-windest">
 		
      	 		</NavLink>
				<NavLink to="Registracija" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Registracija
				</NavLink>

				<NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			    	Login
				</NavLink>

			    <NavLink to="PretragaApoteka" activeClassName="text-red-100 bg-blue-700" className="float-left py-3 inline-flex items-center px-3 font-black rounded text-black-600">
			    	Pretrazi apoteke
			    </NavLink>
			    <NavLink to="PretragaLekova" activeClassName="text-red-100 bg-blue-700" className="float-left py-3 inline-flex items-center px-3 font-black rounded text-black-600">
			    	Pretrazi lekove
			    </NavLink>
			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}