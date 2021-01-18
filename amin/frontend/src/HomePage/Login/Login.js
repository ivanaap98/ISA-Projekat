import React from "react"
import "./login.css"
export default function Login() {
  return (
   	<form method="GET">
            <label for="email">email <span></span></label>
            <input type="email" name="email" id="email" placeholder="type a valid email"/>
            <label for="pwd">password <span></span></label>
            <input type="password" name="pwd" id='pwd'placeholder="type a complex password"/>
            
            
            <input type='submit' value='login'/>
        </form>
  )
}