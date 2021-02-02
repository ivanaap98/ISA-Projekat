package Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="pacijenti")
public class Pacijent extends Korisnik {

   @Column(name="alergeni")
    String alergeni;
   @Column(name="penali")
    int penali;
   @Column(name="pogodnosti")
    String pogodnosti;
public String getAlergeni() {
	return alergeni;
}
public void setAlergeni(String alergeni) {
	this.alergeni = alergeni;
}
public int getPenali() {
	return penali;
}
public void setPenali(int penali) {
	this.penali = penali;
}
public String getPogodnosti() {
	return pogodnosti;
}
public void setPogodnosti(String pogodnosti) {
	this.pogodnosti = pogodnosti;
}
@Override
public String toString() {
	return "Pacijent [alergeni=" + alergeni + ", penali=" + penali + ", pogodnosti=" + pogodnosti + "]";
}
public Pacijent(String alergeni, int penali, String pogodnosti) {
	super();
	this.alergeni = alergeni;
	this.penali = penali;
	this.pogodnosti = pogodnosti;
}


}
