package Model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="dobavljac")
public class Dobavljac extends Zaposleni {

	public Dobavljac(String ime, String prezime, String uloga) {
		super(ime, prezime, uloga);
		// TODO Auto-generated constructor stub
	}
   
}
