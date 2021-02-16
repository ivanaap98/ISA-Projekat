import React,{useState} from 'react';
import axios from 'axios'

export default function Registracija(){
 
 const [email, setEmail] = useState('');
 const [password,setPass] = useState('');
 const [ime, setIme] = useState('');
 const [prezime,setPrezime] = useState('');
 const [phone, setPhone] = useState('');
 const [adresa,setAdresa] = useState('');
 const [grad,setGrad] = useState('');
 
   function registracija() {
    axios({
    method:'post',
    url:'http://localhost:8080/Registracija' ,
    data:{ 
      'email':email,
      'password':password ,
      'ime':ime,
      'prezime':prezime,
      'phone':phone,
      'adresa':adresa,
      'grad':grad
    }});}
    
  return(

    <main id="background" className="bg-fixed h-screen w-screen">
        <form>
           <label for="email">email <span></span></label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}  name="email" id="email" placeholder="unesi svoj mail"/>
            <label for="pwd">password <span></span></label>
            <input type="password" name="pwd" onChange={e => setPass(e.target.value)} id='pwd'placeholder="unesi svoju sifru"/>
            <label for="ime">Ime <span></span></label>
            <input type="text" name="ime" onChange={e => setIme(e.target.value)} id="ime" placeholder="upisi svoje ime"/>
            <label for="prezime">Prezime <span></span></label>
            <input type="text" name="prezime" onChange={e => setPrezime(e.target.value)} id="prezime" placeholder="upisi svoje prezime"/>
            <label for="phone">Telefon <span></span></label>
            <input type="text" name="phone" onChange={e => setPhone(e.target.value)} id="phone" placeholder="upisi svoj telefon"/>
            <label for="adresa">Adresa <span></span></label>
            <input type="text" name="adresa" onChange={e => setAdresa(e.target.value)} id="adresa" placeholder="upisi adresu"/>
            <label for="grad">Grad <span></span></label>
            <input type="text" name="grad" onChange={e => setGrad(e.target.value)} id="grad" placeholder="upisi grad"/>
            <input type='submit' onClick=  {registracija} />
        </form>
      </main>
  )
 
}
