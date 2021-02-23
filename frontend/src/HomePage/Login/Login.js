import React from "react"
import "../landingPage.css";
import NavBar from "../NavBar";

export default function Login() {
  return (
    <main id="background" className="z-0 bg-fixed h-screen w-screen">
      <NavBar/>      

      <div
      style={{
        position : 'absolute', left : '50%', top : '50%',
        transform : 'translate(-50%, -50%)'
      }}>

      <form className="items-center bg-gradient-to-r from-blue-300 to-blue-900 w-full h-full font-black text-black flex flex-col text-1xl">

        <div className="my-4 text-center w-5/6"> 
          <label for="email" className="text-white">Email : </label>
          <input className="h-12 mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" name="email" id="email" placeholder="unesite email"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="pwd" className="text-white">Lozinka :</label>
          <input className="h-12 mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="pwd" id='pwd'placeholder="unesite lozinku"/>
        </div>

        <div>
          <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-1xl border rounded font-black text-white w-32 h-4/5 mb-4 items-center justify-between" type='submit' value='login'>Potvrdi</button>
        </div>

      </form>

      </div>
    </main>
  )
}