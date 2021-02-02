package Cotroller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/Registracija")
public class Hello {
	@PostMapping()
    public ResponseEntity<?> print(@RequestBody String[] args) {
    	System.out.print("Hello");
    	return new ResponseEntity<>(HttpStatus.OK);
    }
}