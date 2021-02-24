import {NavLink} from 'react-router-dom';

export default function AdminApotekeSideBar() {

    return (
        <div className="text-left flex flex-col shadow-inner opacity-80 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300 font-black p-3 h-screen w-1/5 text-white text-2xl">
        <NavLink to="AdminApoteke" className="mt-6 transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Izvestaj o poslovanju
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Slobodni Termini
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Akcije/Promocije
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Narudzbenice
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Dermatolozi
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Farmaceuti
        </NavLink>
        
        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Lekovi
        </NavLink>

        <NavLink to="AdminApoteke" className="transform -skew-x-12 border-opacity-30 border-b-8 border-white shadow-2xl my-2">
            Upiti        
        </NavLink>
       
    </div>
    )
}