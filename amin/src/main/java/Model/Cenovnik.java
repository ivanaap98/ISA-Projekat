package Model;

public class Cenovnik {
      int cena;
      int id_cenovnik;
	public int getCena() {
		return cena;
	}
	public void setCena(int cena) {
		this.cena = cena;
	}
	public int getId_cenovnik() {
		return id_cenovnik;
	}
	public void setId_cenovnik(int id_cenovnik) {
		this.id_cenovnik = id_cenovnik;
	}
	@Override
	public String toString() {
		return "Cenovnik [cena=" + cena + ", id_cenovnik=" + id_cenovnik + "]";
	}
	public Cenovnik(int cena, int id_cenovnik) {
		super();
		this.cena = cena;
		this.id_cenovnik = id_cenovnik;
	}
	
}
