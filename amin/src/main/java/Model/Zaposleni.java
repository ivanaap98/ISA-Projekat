package Model;

public class Zaposleni {
  
  String ime;
  String prezime;
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
@Override
public String toString() {
	return "Zaposleni [ime=" + ime + ", prezime=" + prezime + "]";
}
public Zaposleni(String ime, String prezime) {
	super();
	this.ime = ime;
	this.prezime = prezime;
}


  
}
