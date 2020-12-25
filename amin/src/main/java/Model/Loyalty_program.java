package Model;

public class Loyalty_program {
  int poeni;
  String kategorija;
  int popust;
public int getPoeni() {
	return poeni;
}
public void setPoeni(int poeni) {
	this.poeni = poeni;
}
public String getKategorija() {
	return kategorija;
}
public void setKategorija(String kategorija) {
	this.kategorija = kategorija;
}
public int getPopust() {
	return popust;
}
public void setPopust(int popust) {
	this.popust = popust;
}
@Override
public String toString() {
	return "Loyalty_program [poeni=" + poeni + ", kategorija=" + kategorija + ", popust=" + popust + "]";
}
public Loyalty_program(int poeni, String kategorija, int popust) {
	super();
	this.poeni = poeni;
	this.kategorija = kategorija;
	this.popust = popust;
}
  
}
