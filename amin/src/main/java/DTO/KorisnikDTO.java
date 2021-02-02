package DTO;

import java.util.Date;

import Model.Korisnik;

public class KorisnikDTO {

	private String email;
	private String password;
	private Integer id;
	private String ime;
	private String prezime;
	private String uloga;
	private String jmbg;
	private Date datum_rodjenja;
	private String adresa;
	private String grad;
	private String telefon;
	
	public KorisnikDTO(String email, String password, Integer id,String ime,String prezime,String uloga,String jmbg,Date datum_rodjenja,String adresa,String grad,String telefon) {
		super();
		this.email = email;
		this.password = password;
		this.id = id;
		this.ime=ime;
		this.prezime=prezime;
		this.uloga=uloga;
		this.jmbg=jmbg;
		this.datum_rodjenja=datum_rodjenja;
		this.adresa=adresa;
		this.grad=grad;
		this.telefon=telefon;
	}
	public KorisnikDTO() {
		super();
		this.id = 0;
		this.email = "";
		this.password = "";
		this.ime="";
		this.prezime="";
		this.uloga="";
		this.jmbg="";
		this.datum_rodjenja=null;
		this.adresa="";
		this.grad="";
		this.telefon="";
	}
	
	public KorisnikDTO(Korisnik korisnik)
	 {
		
		this.id = korisnik.getId();
		this.email =korisnik.getEmail();
		this.password =korisnik.getLozinka();
		this.ime=korisnik.getIme();
		this.prezime=korisnik.getPrezime();
		this.uloga=korisnik.getUloga();
		this.jmbg=korisnik.getJmbg();
		this.datum_rodjenja=korisnik.getDatum_rodjenja();
		this.adresa=korisnik.getAdresa();
		this.grad=korisnik.getGrad();
	}
	
	
	
}
