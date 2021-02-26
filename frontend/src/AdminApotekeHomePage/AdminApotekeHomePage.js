import React from "react";
import { BrowserRouter,Route,Switch} from "react-router-dom"
import AdminApotekeNavBar from "./AdminApotekeNavBar";
import "../HomePage/landingPage.css";
import AdminApotekeSideBar from './AdminApotekeSideBar';
import AkcijePromocije from "./AkcijePromocije/AkcijePromocije";
import Dermatolozi from "./Dermatolozi/Dermatolozi";
import Farmaceuti from "./Farmaceuti/Farmaceuti";
import Izvestaji from "./Izvestaji/Izvestaji";
import Lekovi from "./Lekovi/Lekovi";
import Narudzbenice from "./Narudzbenice/Narudzbenice";
import SlobodniTermini from "./Slobodni Termini/SlobodniTermini";
import Upiti from "./Upiti/Upiti";
import AzurirajPodatke from "./AzurirajPodatke";

export default function AdminApotekeHomePage() {
    return (
        <main id="background" className="bg-fixed h-full w-full">
            
            <BrowserRouter>
                <AdminApotekeNavBar/>
                <AdminApotekeSideBar/>
	            

                    <Switch>
                        <Route component={AzurirajPodatke} path='/AdminApoteke/AzurirajPodatke' />     
                        <Route component={AkcijePromocije} path='/AdminApoteke/AkcijePromocije' />
                        <Route component={Dermatolozi} path='/AdminApoteke/Dermatolozi' />
                        <Route component={Farmaceuti} path='/AdminApoteke/Farmaceuti' />
                        <Route component={Izvestaji} path='/AdminApoteke/Izvestaji'  />
                        <Route component={Lekovi} path='/AdminApoteke/Lekovi' />
                        <Route component={Narudzbenice} path='/AdminApoteke/Narudzbenice' />
                        <Route component={SlobodniTermini} path='/AdminApoteke/SlobodniTermini' />
                        <Route component={Upiti} path='/AdminApoteke/Upiti' />
                    </Switch>
      
             </BrowserRouter>
        </main>
    
    )
}