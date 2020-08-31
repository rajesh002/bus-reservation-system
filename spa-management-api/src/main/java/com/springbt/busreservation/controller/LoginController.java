package com.springbt.busreservation.controller;


import com.springbt.busreservation.model.Customer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
@RequestMapping("/api/v1")

public class LoginController {
	@RequestMapping("/login")
    public boolean login(@RequestBody Customer customer) {
        return customer.getEmail().equals("customer") && customer.getPassword().equals("password");
    }
}
