import {NavLink} from 'react-router-dom';
import "../HomePage/landingPage.css";

export default function PacijentSideBar() {

    return (
        <div className="text-left flex flex-col shadow-inner opacity-80 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300 font-black p-3 h-screen w-1/5 text-white text-2xl">

        <NavLink to="SavetovanjeKodFarmaceuta" 
        className="mt-6 transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Savetovanje kod farmaceuta
        </NavLink>

        <NavLink to="IstorijaPosetaDermatologu/" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Istorija poseta dermatologu
        </NavLink>

        <NavLink to="RezervisaniLekovi"  className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Rezervisani lekovi
        </NavLink>

        <NavLink to="ZakazanePosete"  className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Zakazane posete
        </NavLink>

        <NavLink to="ERecepti" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            ERecepti            
        </NavLink>

        <NavLink to="Apoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Apoteke
        </NavLink>

        <NavLink to="Penali"  className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Penali
        </NavLink>

        <NavLink to="Zalbe" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Zalbe
        </NavLink>
       
    </div>
    )
}