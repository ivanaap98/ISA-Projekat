package Model;

import java.util.Date;

public class Pacijent {
    String ime;
    String prezime;
    Date datum_rodjenja;
    int jmbg;
    String adresa;
    String alergeni;
    int penali;
    String pogodnosti;
    
    @Override
	public String toString() {
		return "Pacijent [ime=" + ime + ", prezime=" + prezime + ", datum_rodjenja=" + datum_rodjenja + ", jmbg=" + jmbg
				+ ", adresa=" + adresa + ", alergeni=" + alergeni + ", penali=" + penali + ", pogodnosti=" + pogodnosti
				+ "]";
	}
	public String getIme() {
		return ime;
	}
	public void setIme(String ime) {
		this.ime = ime;
	}
	public String getPrezime() {
		return prezime;
	}
	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}
	public Date getDatum_rodjenja() {
		return datum_rodjenja;
	}
	public void setDatum_rodjenja(Date datum_rodjenja) {
		this.datum_rodjenja = datum_rodjenja;
	}
	public int getJmbg() {
		return jmbg;
	}
	public void setJmbg(int jmbg) {
		this.jmbg = jmbg;
	}
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
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
	public Pacijent(String ime, String prezime, Date datum_rodjenja, int jmbg, String adresa, String alergeni,
			int penali, String pogodnosti) {
		super();
		this.ime = ime;
		this.prezime = prezime;
		this.datum_rodjenja = datum_rodjenja;
		this.jmbg = jmbg;
		this.adresa = adresa;
		this.alergeni = alergeni;
		this.penali = penali;
		this.pogodnosti = pogodnosti;
	}
	
}