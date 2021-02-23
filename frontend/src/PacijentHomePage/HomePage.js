import React from "react";
import "../HomePage/landingPage.css";
import PacijentNavBar from "./PacijentNavBar";
import PacijentSideBar from './PacijentSideBar';

export default function NavBar() {
    return (
      <main id="background" className="bg-fixed h-full w-full">
        <PacijentNavBar/>
        <PacijentSideBar/>
      </main>
    
    )
}