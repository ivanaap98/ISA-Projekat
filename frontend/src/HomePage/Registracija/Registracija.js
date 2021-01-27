import React from "react";
import  "./Reg.css";
export default function Registracija() {
  return(
 
 	<form method="GET">
           <label for="email">email <span></span></label>
            <input type="email" name="email" id="email" placeholder="unesi svoj mail"/>
            <label for="pwd">password <span></span></label>
            <input type="password" name="pwd" id='pwd'placeholder="unesi svoju sifru"/>
            <label for="ime">Ime <span></span></label>
            <input type="text" name="ime" id="ime" placeholder="upisi svoje ime"/>
            <label for="prezime">Prezime <span></span></label>
            <input type="text" name="prezime" id="prezime" placeholder="upisi svoje prezime"/>
            <label for="phone">Telefon <span></span></label>
            <input type="text" name="phone" id="phone" placeholder="upisi svoj telefon"/>
            <label for="adresa">Adresa <span></span></label>
            <input type="text" name="adresa" id="adresa" placeholder="upisi adresu"/>
            <label for="grad">Grad <span></span></label>
            <input type="text" name="grad" id="grad" placeholder="upisi grad"/>
            <input type='submit' value='register'/>
        </form>
 	
  )
  
}