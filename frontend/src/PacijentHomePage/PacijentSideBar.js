import {NavLink} from 'react-router-dom';

export default function PacijentSideBar() {

    return (
        <div className="flex flex-col opacity-90 bg-gradient-to-r from-blue-700 via-blue-700 to-blue-100 font-black p-3 h-screen w-1/6 text-white text-2xl">
        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Apoteke
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Istorija poseta dermatologu
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Savetovanje kod farmaceuta
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Zakazane posete
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            ERecepti
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Rezervisani lekovi
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Penali
        </NavLink>

        <NavLink to="Pacijent" className="border-opacity-50 border-b-8 border-white shadow-2xl my-2">
            Zalbe
        </NavLink>
       
    </div>
    )
}