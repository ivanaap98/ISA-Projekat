import {NavLink} from 'react-router-dom';

export default function PacijentSideBar() {

    return (
        <div className="flex flex-col opacity-70 bg-gradient-to-r from-blue-700 to-blue-100 font-black p-5 h-screen w-1/6 text-black text-3xl">
        <NavLink to="Pacijent" className="my-5">
            Zadatak 1
        </NavLink>

        <NavLink to="Pacijent" className="my-5">
            Zadatak 2
        </NavLink>

        <NavLink to="Pacijent" className="my-5">
            Zadatak 3
        </NavLink>

        <NavLink to="Pacijent" className="my-5">
            Zadatak 4
        </NavLink>

        <NavLink to="Pacijent" className="my-5">
            Zadatak 5
        </NavLink>

        <NavLink to="Pacijent" className="my-5">
            Zadatak 6
        </NavLink>
       
    </div>
    )
}