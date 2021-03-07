package Model;
import java.util.Date;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="korisnici")
public class Korisnik {
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
  int id;
 @Column(name="email")
  String email;
 @Column(name="lozinka")
  String lozinka;
 @Column(name="ime")
  String ime;
 @Column (name="prezime")
  String prezime;
 @Column(name="grad")
  String grad;
 @Column(name="telefon")
  String telefon;

  

  public Korisnik()  {
	  
  }



public int getId() {
	return id;
}



public void setId(int id) {
	this.id = id;
}



public String getEmail() {
	return email;
}



public void setEmail(String email) {
	this.email = email;
}



public String getLozinka() {
	return lozinka;
}



public void setLozinka(String lozinka) {
	this.lozinka = lozinka;
}



public String getIme() {
	return ime;
}



public void setIme(String ime) {
	this.ime = ime;
}



public String getPrezime() {
	return prezime;
}



public void setPrezime(String prezime) {
	this.prezime = prezime;
}



public String getGrad() {
	return grad;
}



public void setGrad(String grad) {
	this.grad = grad;
}



public String getTelefon() {
	return telefon;
}



public void setTelefon(String telefon) {
	this.telefon = telefon;
}



@Override
public String toString() {
	return "Korisnik [id=" + id + ", email=" + email + ", lozinka=" + lozinka + ", ime=" + ime + ", prezime=" + prezime
			+ ", grad=" + grad + ", telefon=" + telefon + "]";
}



public Korisnik(int id, String email, String lozinka, String ime, String prezime, String grad, String telefon) {
	super();
	this.id = id;
	this.email = email;
	this.lozinka = lozinka;
	this.ime = ime;
	this.prezime = prezime;
	this.grad = grad;
	this.telefon = telefon;
}


  
}
