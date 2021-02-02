package Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="narudzbenica")
public class Narudzbenica extends Lekovi {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  int id;
  @Column(name="datum")
  Date datum;
  @Column(name="rok_za_ponude")
  Date rok_za_ponude;
  @Column(name="nove_kolicine")
  int nove_kolicine;
  @Column(name="nov_lek")
  boolean nov_lek;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
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
	return "Narudzbenica [id=" + id + ", datum=" + datum + ", rok_za_ponude=" + rok_za_ponude + ", nove_kolicine="
			+ nove_kolicine + ", nov_lek=" + nov_lek + "]";
}
public Narudzbenica(int cena, int id_cenovnik, int id, String naziv, int kolicina, int id_zamenski, int br_poena,
		String vrsta_leka, String oblik_leka, String sastav, String proizvodjac, boolean rezim_izdavanja,
		String dodatne_napomene, String alergeni, int id2, Date datum, Date rok_za_ponude, int nove_kolicine,
		boolean nov_lek) {
	super(cena, id_cenovnik, id, naziv, kolicina, id_zamenski, br_poena, vrsta_leka, oblik_leka, sastav, proizvodjac,
			rezim_izdavanja, dodatne_napomene, alergeni);
	id = id2;
	this.datum = datum;
	this.rok_za_ponude = rok_za_ponude;
	this.nove_kolicine = nove_kolicine;
	this.nov_lek = nov_lek;
}




}