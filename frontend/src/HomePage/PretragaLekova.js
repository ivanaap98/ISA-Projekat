import React from "react"
import "./landingPage.css";
import NavBar from "./NavBar";

export default function PretragaLekova() {
  return (
    <main id="background" className="w-screen h-screen bg-fixed">
        <NavBar/>
        <h1 className="text-center text-4xl text-black font-mono">Lekovi</h1>
    </main>
  )
}