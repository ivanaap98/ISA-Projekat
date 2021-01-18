import React from "react";
import  "./Reg.css";
export default function Registracija() {
  return(
 
 	<form method="GET">
            <label for="userN">username <span></span></label>
            <input type='text' name= 'username' id ='userN' placeholder="type your name in english please..."/>
            <label for="pwd">password <span></span></label>
            <input type="password" name="pwd" id='pwd'placeholder="type a complex password"/>
            <label for="email">email <span></span></label>
            <input type="email" name="email" id="email" placeholder="type a valid email"/>
            <label for="phone">phone <span></span></label>
            <input type="text" name="phone" id="phone" placeholder="your phone here please..."/>
            <input type='submit' value='register'/>
        </form>
 	
  )
  
}