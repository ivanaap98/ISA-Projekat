package Model;

import java.util.Date;

public class Narudzbenica {
  Date datum;
  Date rok_za_ponude;
  int nove_kolicine;
  boolean nov_lek;
public Date getDatum() {
	return datum;
}
public void setDatum(Date datum) {
	this.datum = datum;
}
public Date getRok_za_ponude() {
	return rok_za_ponude;
}
public void setRok_za_ponude(Date rok_za_ponude) {
	this.rok_za_ponude = rok_za_ponude;
}
public int getNove_kolicine() {
	return nove_kolicine;
}
public void setNove_kolicine(int nove_kolicine) {
	this.nove_kolicine = nove_kolicine;
}
public boolean isNov_lek() {
	return nov_lek;
}
public void setNov_lek(boolean nov_lek) {
	this.nov_lek = nov_lek;
}
@Override
public String toString() {
	return "Narudzbenica [datum=" + datum + ", rok_za_ponude=" + rok_za_ponude + ", nove_kolicine=" + nove_kolicine
			+ ", nov_lek=" + nov_lek + "]";
}
public Narudzbenica(Date datum, Date rok_za_ponude, int nove_kolicine, boolean nov_lek) {
	super();
	this.datum = datum;
	this.rok_za_ponude = rok_za_ponude;
	this.nove_kolicine = nove_kolicine;
	this.nov_lek = nov_lek;
}
  
}