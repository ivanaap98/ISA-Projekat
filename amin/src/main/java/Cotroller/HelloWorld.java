package Cotroller;


import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

@Controller
public class HelloWorld {
	@RequestMapping("/Registracija")
    public String sayHello()
    {
		return "Hello";
		
    }
}
