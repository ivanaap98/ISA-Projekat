import {NavLink} from 'react-router-dom';

export default function AdminApotekeSideBar() {

    return (
        <div className="text-left flex flex-col shadow-inner opacity-80 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300 font-black p-3 h-screen w-1/5 text-white text-2xl">

        <NavLink to="/AdminApoteke/Izvestaji" className="mt-6 transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Izvestaj o poslovanju
        </NavLink>

        <NavLink to="SlobodniTermini" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Slobodni Termini
        </NavLink>

        <NavLink to="AkcijePromocije" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Akcije/Promocije
        </NavLink>

        <NavLink to="Narudzbenice" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Narudzbenice
        </NavLink>

        <NavLink to="Dermatolozi" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Dermatolozi
        </NavLink>

        <NavLink to="Farmaceuti" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Farmaceuti
        </NavLink>
        
        <NavLink to="Lekovi" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Lekovi
        </NavLink>

        <NavLink to="Upiti" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Upiti        
        </NavLink>
       
    </div>
    )
}