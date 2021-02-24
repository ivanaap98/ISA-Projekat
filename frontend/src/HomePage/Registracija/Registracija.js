import React from 'react';
import NavBar from "../NavBar";
import "../landingPage.css";

export default function Registracija(){
    
  return(

        <main id="background" className="bg-fixed h-screen w-screen">
          <NavBar/>

        <div
        style={{
        position : 'absolute', left : '50%', top : '45%',
        transform : 'translate(-50%, -40%)'
        }}>

      <form className="items-center bg-gradient-to-r from-blue-300 to-blue-900 w-full h-full font-black text-black flex flex-col text-sm">

        <div className="my-6 text-center w-5/6"> 
          <label for="email" className="text-white">Email : </label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="email" name="email" id="email" placeholder="unesite email"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="pwd" className="text-white">Lozinka :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="password" name="pwd" id='pwd'placeholder="unesite lozinku"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="ime" className="text-white">Ime :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="text" name="ime" id='ime'placeholder="unesite ime"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="prezime" className="text-white">Prezime :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="text" name="text" id='prezime'placeholder="unesite prezime"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="telefon" className="text-white">Telefon :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="number" name="telefon" id='telefon'placeholder="unesite telefon"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="adresa" className="text-white">Adresa :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="text" name="adresa" id='adresa'placeholder="unesite adresu"/>
        </div>

        <div className="mb-6 text-center w-5/6">
          <label for="grad" className="text-white">Grad :</label>
          <input className="h-6 shadow appearance-none border rounded w-full py-1 px-3 text-grey-darker" type="text" name="grad" id='grad'placeholder="unesite grad"/>
        </div>

        <div>
          <button className="bg-gradient-to-r from-blue-300 to-blue-900 text-1xl border rounded font-black text-white w-32 h-4/5 mb-4 items-center justify-between" type='submit' value='login'>Potvrdi</button>
        </div>

      </form>

      </div>
        
      </main>
  )
 
}
