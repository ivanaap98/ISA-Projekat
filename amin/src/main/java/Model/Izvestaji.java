package Model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="izvestaj")
public class Izvestaji {
 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 int id; 
 String opis;
  Date datum;
  boolean izostanak;
  String trajanje_terapije;
  boolean sledeca_poseta;
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
public Date getDatum() {
	return datum;
}
public void setDatum(Date datum) {
	this.datum = datum;
}
public boolean isIzostanak() {
	return izostanak;
}
public void setIzostanak(boolean izostanak) {
	this.izostanak = izostanak;
}
public String getTrajanje_terapije() {
	return trajanje_terapije;
}
public void setTrajanje_terapije(String trajanje_terapije) {
	this.trajanje_terapije = trajanje_terapije;
}
public boolean isSledeca_poseta() {
	return sledeca_poseta;
}
public void setSledeca_poseta(boolean sledeca_poseta) {
	this.sledeca_poseta = sledeca_poseta;
}
@Override
public String toString() {
	return "Izvestaji [id=" + id + ", opis=" + opis + ", datum=" + datum + ", izostanak=" + izostanak
			+ ", trajanje_terapije=" + trajanje_terapije + ", sledeca_poseta=" + sledeca_poseta + "]";
}
public Izvestaji(int id, String opis, Date datum, boolean izostanak, String trajanje_terapije, boolean sledeca_poseta) {
	super();
	this.id = id;
	this.opis = opis;
	this.datum = datum;
	this.izostanak = izostanak;
	this.trajanje_terapije = trajanje_terapije;
	this.sledeca_poseta = sledeca_poseta;
}

}
