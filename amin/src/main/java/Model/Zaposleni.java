package Model;

public class Zaposleni extends Korisnik {
    String ime;
    String prezime;
	String Uloga;
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
	public String getUloga() {
		return Uloga;
	}
	public void setUloga(String uloga) {
		Uloga = uloga;
	}
	@Override
	public String toString() {
		return "Zaposleni [ime=" + ime + ", prezime=" + prezime + ", Uloga=" + Uloga + "]";
	}
	public Zaposleni(String ime, String prezime, String uloga) {
		super();
		this.ime = ime;
		this.prezime = prezime;
		Uloga = uloga;
	}
	



  
}
