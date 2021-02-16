import React from "react"
import "../landingPage.css";

export default function Login() {
  return (
    <main id="background" className="z-0 bg-fixed h-screen w-screen">
      
      <form className="text-black items-center rounded flex flex-col text-3xl">

        <div className="mb-4 text-center w-1/3"> 
          <label for="email">Email :<span></span></label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" name="email" id="email" placeholder="unesite svoj email"/>
        </div>

        <div className="mb-6 text-center w-1/3">
          <label for="pwd">Lozinka :</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="pwd" id='pwd'placeholder="unesite lozinku"/>
        </div>

        <div>
          <button className="w-1/3 mb-8 items-center justify-between w-32" type='submit' value='login'>Potvrdi</button>
        </div>

      </form>
    </main>
  )
}