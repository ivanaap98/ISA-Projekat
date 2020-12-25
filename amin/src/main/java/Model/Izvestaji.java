package Model;


import java.util.Date;

public class Izvestaji {
  String opis;
  Date datum;
public String getOpis() {
	return opis;
}
public void setOpis(String opis) {
	this.opis = opis;
}
public Date getDatum() {
	return datum;
}
public void setDatum(Date datum) {
	this.datum = datum;
}
@Override
public String toString() {
	return "Izvestaji [opis=" + opis + ", datum=" + datum + "]";
}
public Izvestaji(String opis, Date datum) {
	super();
	this.opis = opis;
	this.datum = datum;
}
  
  
}
