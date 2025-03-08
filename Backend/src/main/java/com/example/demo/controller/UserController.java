package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository urep;
	
	@PostMapping("/insert")
	public ResponseEntity<User> insertUser(@RequestBody User u) {
		Optional<User> optuser = urep.findById(u.getUsername());
		if(optuser.isEmpty()) {
			urep.save(u);
			return new ResponseEntity<>(u,HttpStatus.OK);
		}
		return new ResponseEntity<User>(HttpStatus.ALREADY_REPORTED);
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody User u){
		return urep.existsByUsernameAndPassword(u.getUsername(), u.getPassword());
	}
	
	
}
