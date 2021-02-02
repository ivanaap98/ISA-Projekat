package Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="loyalty_program")
public class Loyalty_program {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  int id;
  @Column(name="poeni")
  int poeni;
  @Column(name="kategorija")
  String kategorija;
  @Column(name="popust")
  int popust;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
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
	return "Loyalty_program [id=" + id + ", poeni=" + poeni + ", kategorija=" + kategorija + ", popust=" + popust + "]";
}
public Loyalty_program(int id, int poeni, String kategorija, int popust) {
	super();
	this.id = id;
	this.poeni = poeni;
	this.kategorija = kategorija;
	this.popust = popust;
}


}
