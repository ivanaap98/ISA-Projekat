import React from "react";
import {NavLink} from "react-router-dom";
import "../HomePage/landingPage.css";

export default function AdminApotekeNavBar() {
    return (
      <header className="w-full h-12 bg-gradient-to-r from-blue-300 via-blue-800 to-indigo-900">
      	<div className="container mx-auto flex justify-between text-2xl">
      	 	<nav className="w-full">

               	<h1 className="text-blue-800 uppercase tracking-widest h-12 float-left transform -skew-x-12 inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Administrator apoteke
				</h1>
      	 		
				<NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="h-12 float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Izloguj se 
				</NavLink>

				<NavLink to="Nesto" activeClassName="text-red-100 bg-blue-700" className="h-12 float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			    	Azuriraj podatke
				</NavLink>

                <NavLink to="AdminApoteke" exact activeClassName="text-red-100 bg-blue-700" className="h-12 float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
                    Pocetna
      	 		</NavLink>

			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}