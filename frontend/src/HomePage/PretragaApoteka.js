import React from "react";
import "./landingPage.css";
import NavBar from "./NavBar";

export default function PretragaApoteka() {
  return (
    <main id="background" className="h-screen w-screen bg-fixed">
      <NavBar/>
      <h1 className="text-center text-4xl text-black font-mono">Apoteke</h1>
    </main>
  )
}