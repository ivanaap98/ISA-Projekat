import React from "react";
import {NavLink} from "react-router-dom";
import "../HomePage/landingPage.css";

export default function AdminApotekeNavBar() {
    return (
      <header className="w-full bg-gradient-to-r from-blue-100 via-blue-900 to-indigo-900">
      	<div className="container mx-auto flex justify-between text-2xl">
      	 	<nav className="w-full">

               	<h1 className="italic text-blue-900 font-mono float-left inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Administrator apoteke
				</h1>
      	 		
				<NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Izloguj se 
				</NavLink>

				<NavLink to="Nesto" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			    	Azuriraj podatke
				</NavLink>

                <NavLink to="AdminApoteke" exact activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
                    Pocetna
      	 		</NavLink>

			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}