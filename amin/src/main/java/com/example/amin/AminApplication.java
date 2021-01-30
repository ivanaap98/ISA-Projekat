package com.example.amin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.boot.CommandLineRunner;


@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class AminApplication  {

	public static void main(String[] args) {
		SpringApplication.run(AminApplication.class, args);
	}

}
