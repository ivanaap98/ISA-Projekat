import React from "react"
import "./login.css"
export default function Login() {
  return (
   	<form method="GET">
            <label for="email">email <span></span></label>
            <input type="email" name="email" id="email" placeholder="unesi svoj mail"/>
            <label for="pwd">password <span></span></label>
            <input type="password" name="pwd" id='pwd'placeholder="unesi svoj password"/>
            
            
            <input type='submit' value='login'/>
        </form>
  )
}