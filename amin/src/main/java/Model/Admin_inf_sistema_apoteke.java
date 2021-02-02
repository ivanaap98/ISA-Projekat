package Model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="admin_inf_sistema_apoteke")
public class Admin_inf_sistema_apoteke extends Zaposleni {

	public Admin_inf_sistema_apoteke(String ime, String prezime, String uloga) {
		super(ime, prezime, uloga);
		// TODO Auto-generated constructor stub
	}

}
