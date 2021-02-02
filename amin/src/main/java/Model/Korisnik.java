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
@Column(name="prezime")
	String prezime;
@Column(name="datum_rodjenja")
	Date datum_rodjenja;
@Column(name="jmbg")
	String jmbg;
@Column(name="adresa")
	String adresa;
@Column(name="grad")
	String grad;
@Column(name="telefon")
String telefon;
@Column(name="uloga")
String uloga;

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

public Date getDatum_rodjenja() {
	return datum_rodjenja;
}

public void setDatum_rodjenja(Date datum_rodjenja) {
	this.datum_rodjenja = datum_rodjenja;
}

public String getJmbg() {
	return jmbg;
}

public void setJmbg(String jmbg) {
	this.jmbg = jmbg;
}

public String getAdresa() {
	return adresa;
}

public void setAdresa(String adresa) {
	this.adresa = adresa;
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

public String getUloga() {
	return uloga;
}

public void setUloga(String uloga) {
	this.uloga = uloga;
}

@Override
public String toString() {
	return "Korisnik [id=" + id + ", email=" + email + ", lozinka=" + lozinka + ", ime=" + ime + ", prezime=" + prezime
			+ ", datum_rodjenja=" + datum_rodjenja + ", jmbg=" + jmbg + ", adresa=" + adresa + ", grad=" + grad
			+ ", telefon=" + telefon + ", uloga=" + uloga + "]";
}

public Korisnik(int id, String email, String lozinka, String ime, String prezime, Date datum_rodjenja, String jmbg,
		String adresa, String grad, String telefon, String uloga) {
	super();
	this.id = id;
	this.email = email;
	this.lozinka = lozinka;
	this.ime = ime;
	this.prezime = prezime;
	this.datum_rodjenja = datum_rodjenja;
	this.jmbg = jmbg;
	this.adresa = adresa;
	this.grad = grad;
	this.telefon = telefon;
	this.uloga = uloga;
}



  
}
