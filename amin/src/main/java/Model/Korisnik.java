package Model;

public class Korisnik {
  String email;
  int id;
  String lozinka;
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getLozinka() {
	return lozinka;
}
public void setLozinka(String lozinka) {
	this.lozinka = lozinka;
}
@Override
public String toString() {
	return "Korisnik [email=" + email + ", id=" + id + ", lozinka=" + lozinka + "]";
}
public Korisnik(String email, int id, String lozinka) {
	super();
	this.email = email;
	this.id = id;
	this.lozinka = lozinka;
}
  
}
