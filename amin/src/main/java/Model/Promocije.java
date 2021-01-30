package Model;

import java.util.Date;

public class Promocije {
   int id;
  String opis;
  Date datum_od;
  Date datum_do;
  boolean odjava;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
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
	return "Promocije [id=" + id + ", opis=" + opis + ", datum_od=" + datum_od + ", datum_do=" + datum_do + ", odjava="
			+ odjava + "]";
}
public Promocije(int id, String opis, Date datum_od, Date datum_do, boolean odjava) {
	super();
	this.id = id;
	this.opis = opis;
	this.datum_od = datum_od;
	this.datum_do = datum_do;
	this.odjava = odjava;
}
  
  
}
