import React from "react";
import {NavLink} from "react-router-dom";
import "../HomePage/landingPage.css";

export default function PacijentNavBar() {
    return (
      <header className="w-full bg-gradient-to-r from-blue-100 via-blue-900 to-indigo-900">
      	<div className="container mx-auto flex justify-between text-2xl">
      	 	<nav className="w-full">
      	 		
               <NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="italic font-mono float-left inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Pacijent 
				</NavLink>

				<NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Izloguj se 
				</NavLink>

				<NavLink to="Nesto" activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			    	Azuriraj podatke
				</NavLink>

                <NavLink to="Pacijent" exact activeClassName="text-red-100 bg-blue-700" className="float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
                    Pocetna
      	 		</NavLink>
			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}