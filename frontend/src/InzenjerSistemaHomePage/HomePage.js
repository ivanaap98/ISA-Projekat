import React from "react";
import InzSistemaNavBar from "./AdminSistemaNavBar";
import "../HomePage/landingPage.css";
import {NavLink} from 'react-router-dom';
import SideBar from './AdminSideBar';

export default function NavBar() {
    return (
        <main id="background" className="bg-fixed h-full w-full">
            <InzSistemaNavBar/>
            <SideBar/>
        </main>
    
    )
}