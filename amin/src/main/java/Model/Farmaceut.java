package Model;
import java.util.Date;

public class Farmaceut extends Zaposleni {
  float ocena;
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
	return "Farmaceut [ocena=" + ocena + ", radni_kalendar=" + radni_kalendar + "]";
}
public Farmaceut(String ime, String prezime, String uloga, float ocena, Date radni_kalendar) {
	super(ime, prezime, uloga);
	this.ocena = ocena;
	this.radni_kalendar = radni_kalendar;
}

  
}
