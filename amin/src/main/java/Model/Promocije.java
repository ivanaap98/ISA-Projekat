package Model;

import java.util.Date;

public class Promocije {
  String opis;
  Date datum_od;
  Date datum_do;
  boolean odjava;
public String getOpis() {
	return opis;
}
public void setOpis(String opis) {
	this.opis = opis;
}
public Date getDatum_od() {
	return datum_od;
}
public void setDatum_od(Date datum_od) {
	this.datum_od = datum_od;
}
public Date getDatum_do() {
	return datum_do;
}
public void setDatum_do(Date datum_do) {
	this.datum_do = datum_do;
}
public boolean isOdjava() {
	return odjava;
}
public void setOdjava(boolean odjava) {
	this.odjava = odjava;
}
@Override
public String toString() {
	return "Promocije [opis=" + opis + ", datum_od=" + datum_od + ", datum_do=" + datum_do + ", odjava=" + odjava + "]";
}
public Promocije(String opis, Date datum_od, Date datum_do, boolean odjava) {
	super();
	this.opis = opis;
	this.datum_od = datum_od;
	this.datum_do = datum_do;
	this.odjava = odjava;
}
  
}
