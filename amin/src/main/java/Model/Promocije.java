package Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="promocije")
public class Promocije {
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   int id;
   @Column(name="opis")
   String opis;
   @Column(name="datum_od")
   Date datum_od;
   @Column(name="datum_do")
   Date datum_do;
   @Column(name="odjava")
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
