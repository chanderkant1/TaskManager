package com.example.demo.model;
import java.util.*;
import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
	@Id
	@Column(name = "username")
	private String username;
	@Column(name = "password")
	private String password;
	
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
