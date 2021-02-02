package Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="dermatolozi")
public class Dermatolog extends Zaposleni {
	 @Column(name="ocena")
	  float ocena;
	 @Column(name="radni_kalendar")
	  Date radni_kalendar;
	public float getOcena() {
		return ocena;
	}
	public void setOcena(float ocena) {
		this.ocena = ocena;
	}
	public Date getRadni_kalendar() {
		return radni_kalendar;
	}
	public void setRadni_kalendar(Date radni_kalendar) {
		this.radni_kalendar = radni_kalendar;
	}
	@Override
	public String toString() {
		return "Dermatolog [ocena=" + ocena + ", radni_kalendar=" + radni_kalendar + "]";
	}
	public Dermatolog(String ime, String prezime, String uloga, float ocena, Date radni_kalendar) {
		super(ime, prezime, uloga);
		this.ocena = ocena;
		this.radni_kalendar = radni_kalendar;
	}
	
}
