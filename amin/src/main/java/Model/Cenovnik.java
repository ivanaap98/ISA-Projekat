package Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cenovnici")
public class Cenovnik {
  @Column(name="cena")
  int cena;
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
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
