import React from "react"
import "../landingPage.css";

export default function Login() {
  return (
    <main id="background" className="z-0 bg-fixed h-screen w-screen">
      
      <form className="bg-gradient-to-r from-blue-300 to-blue-900 w-1/5 content-center font-black text-black items-center rounded flex flex-col text-1xl">

        <div className="mt-14 mb-4 text-center w-5/6"> 
          <label for="email" className="text-white">Email : </label>
          <input className="h-12 mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" name="email" id="email" placeholder="unesite email"/>
        </div>

        <div className="mt-3 mb-6 text-center w-5/6">
          <label for="pwd" className="text-white">Lozinka :</label>
          <input className="h-12 mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="pwd" id='pwd'placeholder="unesite lozinku"/>
        </div>

        <div>
          <button className="border-gray-600 text-2xl font-black text-white w-1/3 mb-8 items-center justify-between" type='submit' value='login'>Potvrdi</button>
        </div>

      </form>
    </main>
  )
}