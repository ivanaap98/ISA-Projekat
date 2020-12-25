package Model;

public class Apoteka {
  String ime;
  String mesto;
  String adresa;
  String opis;
  float ocena;
public String getIme() {
	return ime;
}
public void setIme(String ime) {
	this.ime = ime;
}
public String getMesto() {
	return mesto;
}
public void setMesto(String mesto) {
	this.mesto = mesto;
}
public String getAdresa() {
	return adresa;
}
public void setAdresa(String adresa) {
	this.adresa = adresa;
}
public String getOpis() {
	return opis;
}
public void setOpis(String opis) {
	this.opis = opis;
}
public float getOcena() {
	return ocena;
}
public void setOcena(float ocena) {
	this.ocena = ocena;
}
@Override
public String toString() {
	return "Apoteka [ime=" + ime + ", mesto=" + mesto + ", adresa=" + adresa + ", opis=" + opis + ", ocena=" + ocena
			+ "]";
}
public Apoteka(String ime, String mesto, String adresa, String opis, float ocena) {
	super();
	this.ime = ime;
	this.mesto = mesto;
	this.adresa = adresa;
	this.opis = opis;
	this.ocena = ocena;
}
  
}
