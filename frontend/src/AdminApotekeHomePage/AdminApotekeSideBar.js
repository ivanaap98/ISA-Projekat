import {NavLink} from 'react-router-dom';

export default function AdminApotekeSideBar() {

    return (
        <div className="flex flex-col opacity-90 bg-gradient-to-r from-blue-700 via-blue-700 to-blue-100 font-black p-3 h-screen w-1/6 text-white text-2xl">
        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Slobodni Termini
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Izvestaj o poslovanju
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Lekovi
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Farmaceuti
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Dermatolozi
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Narudzbenice
        </NavLink>
        
        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Upiti
        </NavLink>

        <NavLink to="AdminApoteke" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Akcije/Promocije            
        </NavLink>
       
    </div>
    )
}