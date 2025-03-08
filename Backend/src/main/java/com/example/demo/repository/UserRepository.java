package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	public boolean existsByUsernameAndPassword(String username, String password);

}
