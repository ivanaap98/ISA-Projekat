import React from "react";
import {NavLink} from "react-router-dom";
import "../HomePage/landingPage.css";

export default function PacijentNavBar() {
    return (
      <header className="h-12 w-full bg-gradient-to-r from-blue-100 via-blue-800 to-indigo-900">
      	<div className="container mx-auto flex justify-between text-2xl">
      	 	<nav className="w-full">

				<h1 className="text-blue-800 uppercase tracking-widest h-12 float-left transform -skew-x-12 inline-flex items-center px-3 py-3 font-black rounded text-white">Pacijent</h1>

				<NavLink to="Login" activeClassName="text-red-100 bg-blue-700" className="h-12  float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			  		Izloguj se 
				</NavLink>

				<NavLink to="AzurirajPodatke" activeClassName="text-red-100 bg-blue-700" className="h-12 float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
			    	Azuriraj podatke
				</NavLink>

                <NavLink to="/Pacijent/" exact activeClassName="text-red-100 bg-blue-700" className="h-12 float-right inline-flex items-center px-3 py-3 font-black rounded text-white">
                    Pocetna
      	 		</NavLink>
			</nav>	      	
      	
      	</div>
      
      </header>
    
    )
}