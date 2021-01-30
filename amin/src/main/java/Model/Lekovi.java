package Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="lekovi")
public class Lekovi extends Cenovnik {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  int id;
 @Column(name="naziv")
  String naziv;
 @Column(name="kolicina")
  int kolicina;
 @Column(name="id_zamenski")
  int id_zamenski;
 @Column(name="br_poena")
  int br_poena;
 @Column(name="vrsta_leka")
  String vrsta_leka;
 @Column(name="oblik_leka")
  String oblik_leka;
@Column(name="sastav")
  String sastav;
@Column(name="proizvodjac")
  String proizvodjac;
@Column(name="rezim_izdavanja")
  boolean rezim_izdavanja;
@Column(name="dodatne_napomene")
  String dodatne_napomene;
@Column(name="alergeni")
  String alergeni;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getNaziv() {
	return naziv;
}
public void setNaziv(String naziv) {
	this.naziv = naziv;
}
public int getKolicina() {
	return kolicina;
}
public void setKolicina(int kolicina) {
	this.kolicina = kolicina;
}
public int getId_zamenski() {
	return id_zamenski;
}
public void setId_zamenski(int id_zamenski) {
	this.id_zamenski = id_zamenski;
}
public int getBr_poena() {
	return br_poena;
}
public void setBr_poena(int br_poena) {
	this.br_poena = br_poena;
}
public String getVrsta_leka() {
	return vrsta_leka;
}
public void setVrsta_leka(String vrsta_leka) {
	this.vrsta_leka = vrsta_leka;
}
public String getOblik_leka() {
	return oblik_leka;
}
public void setOblik_leka(String oblik_leka) {
	this.oblik_leka = oblik_leka;
}
public String getSastav() {
	return sastav;
}
public void setSastav(String sastav) {
	this.sastav = sastav;
}
public String getProizvodjac() {
	return proizvodjac;
}
public void setProizvodjac(String proizvodjac) {
	this.proizvodjac = proizvodjac;
}
public boolean isRezim_izdavanja() {
	return rezim_izdavanja;
}
public void setRezim_izdavanja(boolean rezim_izdavanja) {
	this.rezim_izdavanja = rezim_izdavanja;
}
public String getDodatne_napomene() {
	return dodatne_napomene;
}
public void setDodatne_napomene(String dodatne_napomene) {
	this.dodatne_napomene = dodatne_napomene;
}
public String getAlergeni() {
	return alergeni;
}
public void setAlergeni(String alergeni) {
	this.alergeni = alergeni;
}
@Override
public String toString() {
	return "Lekovi [id=" + id + ", naziv=" + naziv + ", kolicina=" + kolicina + ", id_zamenski=" + id_zamenski
			+ ", br_poena=" + br_poena + ", vrsta_leka=" + vrsta_leka + ", oblik_leka=" + oblik_leka + ", sastav="
			+ sastav + ", proizvodjac=" + proizvodjac + ", rezim_izdavanja=" + rezim_izdavanja + ", dodatne_napomene="
			+ dodatne_napomene + ", alergeni=" + alergeni + "]";
}
public Lekovi(int cena, int id_cenovnik, int id, String naziv, int kolicina, int id_zamenski, int br_poena,
		String vrsta_leka, String oblik_leka, String sastav, String proizvodjac, boolean rezim_izdavanja,
		String dodatne_napomene, String alergeni) {
	super(cena, id_cenovnik);
	this.id = id;
	this.naziv = naziv;
	this.kolicina = kolicina;
	this.id_zamenski = id_zamenski;
	this.br_poena = br_poena;
	this.vrsta_leka = vrsta_leka;
	this.oblik_leka = oblik_leka;
	this.sastav = sastav;
	this.proizvodjac = proizvodjac;
	this.rezim_izdavanja = rezim_izdavanja;
	this.dodatne_napomene = dodatne_napomene;
	this.alergeni = alergeni;
}


}
