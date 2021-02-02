package Model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="admin_apoteke")
public class Admin_apoteke extends Zaposleni {

	public Admin_apoteke(String ime, String prezime, String uloga) {
		super(ime, prezime, uloga);
		// TODO Auto-generated constructor stub
	}

}
